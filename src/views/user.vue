<template>
  <div>
    <el-table :data="userArr" current-row-key="id" style="width: 100%">
      <el-table-column prop="id" label="用户ID"> </el-table-column>
      <el-table-column prop="password" label="密码" width="180">
      </el-table-column>
      <el-table-column prop="time" label="时间" width="180"> </el-table-column>
      <el-table-column prop="username" label="用户名字"> </el-table-column>
      <el-table-column>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
      </el-table-column>
      <el-table-column type="index">
        <template #default="scope">
          <el-button
            type="danger"
            @click="deleteEvent(scope.row.id)"
            icon="el-icon-delete"
            circle
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <!-- <div>{{ tableData }}</div> -->
</template>

<style>
</style>
<script lang='ts'>
import { log } from "console";
import {
  ref,
  reactive,
  onMounted,
  onBeforeUnmount,
  defineComponent,
  PropType,
  toRefs,
  inject,
} from "vue";
import { getUserList, deleteList } from "../api/user";

interface userParms {
  id: number;
  username: string;
  password: number | string;
  time: Date;
}
export default defineComponent({
  props: {},
  setup(props, ctx) {
    const reload = inject("reload");
    const state = reactive({
      // tableData: "sss",
      // userArr:Array<userParms>||[], 不知道怎么搞草
      userArr: [],
    });
    const userArrList = async () => {
      let temp = await getUserList();
      state.userArr = temp.info;
      return state.userArr;
    };
    const deleteEvent = async (id) => {
      console.log(id);
      try {
        await deleteList(id);
        reload();
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(() => {
      userArrList();
      console.log("userList", state.userArr);
    });

    return {
      userArrList,
      deleteEvent,
      ...toRefs(state),
    };
  },
});
</script>

<style scoped>
</style>
