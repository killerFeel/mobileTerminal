import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import $ from "jquery";
// 导入初始化样式表
import "@/assets/css/reset.css";

createApp(App).use(store).use(router).mount('#app');
