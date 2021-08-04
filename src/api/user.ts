import { log } from "console";
import { http } from "../utils/http"

// 获取验证码
export const getVerify = (): any => {
  console.log('fuck the getVertify');
  
  return http.request("get", "/captcha")
}

// 登录
export const getLogin = (data: object): any => {
  console.log('fucking the login');
  
  return http.request("post", "/login", data)
}

// 注册
export const getRegist = (data: object): any => {
  return http.request("post", "/register", data)
}
//获取列表
export const getUserList = (): any => {
  return http.request("get","/getUserList")
}
//删除列表
export const deleteList = (id:number): any => {
  return http.request("delete",`/deleteList/${id}`)
}
//防水墙验证码
export const  getTxVerify = (data: object): any => {
  return http.request("post", "/txCaptcha", data);
};