import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';
import '@/style/index.scss';
// 内置ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// 导入公共样式
import './style/index.scss'
// 导入字体图标
import "./assets/iconfont/iconfont.js"
import "./assets/iconfont/iconfont.css"

// 内置vxe-table
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

createApp(App).use(router).use(store).use(ElementPlus).use(VXETable).mount('#app');
