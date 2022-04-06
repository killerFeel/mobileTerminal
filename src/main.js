import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'default-passive-events';
import $ from "jquery";
// 导入初始化样式表
import "@/assets/css/reset.css";
import { Search,Calendar,Cell,Circle } from 'vant';

createApp(App).use(store).use(router).use(Search).use(Calendar).use(Cell).use(Circle ).mount('#app');
