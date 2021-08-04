<template>
  <div class="login">
    <info
      :ruleForm="contextInfo"
      @on-behavior="onLogin"
      @refreshVerify="refreshVerify"
    />
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  onMounted,
  onBeforeMount,
  getCurrentInstance,
} from "vue";
import info, { ContextProps } from "../components/info/index.vue";
import { getLogin, getTxVerify } from "../api/user";
import { useRouter } from "vue-router";
import { storageSession } from "../utils/storage";
import { warnMessage, successMessage, errorMessage } from "../utils/message";
export default {
  name: "login",
  components: {
    info,
  },
  setup() {
    const router = useRouter();

    // 刷新验证码
    // const refreshGetVerify = async () => {
    //   let { svg } = await getVerify();
    //   contextInfo.svg = svg;
    // };

    const contextInfo: ContextProps = reactive({
      userName: "",
      passWord: "",
      verify: null,
      svg: null,
    });

    const toPage = (info: Object): void => {
      storageSession.setItem("info", info);
      router.push("/");
    };

    // 登录
    const onLogin = async () => {
      let txcaptcha = refreshVerify();
      txcaptcha.show(); // 显示验证码
      //获取凭证
      let configParms = await txcaptcha.getTicket();
      console.log("config");
      console.log(configParms);
    };

    const refreshVerify = () => {
      return new TencentCaptcha("2044701022", async function (res) {
        //res.ret为0 时候 是本地验证成功  然后给服务器发送请求
        if (res.ret === 0) {
          successMessage("本地验证成功");
          let checkCode = await getTxVerify(res);
          let CaptchaCode = checkCode.info.CaptchaCode;
          //这里返回1其实是失败 应该是后端的次数限制
          if (CaptchaCode === 0 || CaptchaCode === 1) {
            console.log(checkCode);
            // 登录逻辑如下
            let { userName, passWord } = contextInfo;
            let { code, info, accessToken } = await getLogin({
              username: userName,
              password: passWord,
              // verify: verify,
            });
            code === 0
              ? successMessage(info) &&
                toPage({
                  username: userName,
                  accessToken,
                })
              : warnMessage(info);
          } else {
            errorMessage("服务器验证失败");
          }
        } else {
          errorMessage("本地验证失败");
        }
      });
    };

    onMounted(() => {
      //防水墙的js依赖文件注入
      let recaptchaScript = document.createElement("script");
      recaptchaScript.setAttribute(
        "src",
        "https://ssl.captcha.qq.com/TCaptcha.js"
      );
      document.head.appendChild(recaptchaScript);
    });

    return {
      contextInfo,
      onLogin,
      router,
      toPage,
      refreshVerify,
    };
  },
};
</script>
