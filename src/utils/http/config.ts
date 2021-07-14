import { AxiosRequestConfig } from "axios"
import { excludeProps } from "./utils"
import { storageSession } from "../storage/index"
/**
 * 默认配置
 */
export const defaultConfig: AxiosRequestConfig = {
  baseURL: '/api',
  timeout: 10000, //10秒超时
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Authorization":`Bearer ${storageSession.getItem('info').accessToken}`
  },
}

export function genConfig(config?: AxiosRequestConfig): AxiosRequestConfig {
  if (!config) {
    return defaultConfig
  }

  const { headers } = config
  if (headers && typeof headers === "object") {
    defaultConfig.headers = {
      ...defaultConfig.headers,
      ...headers
    }
  }
  console.log('-----------',defaultConfig);
  
  return { ...excludeProps(config!, "headers"), ...defaultConfig }
}

export const METHODS = ["post", "get", "put", "delete", "option", "patch"]
