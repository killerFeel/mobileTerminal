import { createApp } from 'vue';
import Router, { createRouter, createWebHistory } from 'vue-router'
import { Toast } from 'vant';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条 样式

import store from "../store/index";

const routes = [
  {
    path: "/",
    name: "tabBar",
    component: ()=>import("@/components/lib/tabBar/index"),
    redirect:"/index",
    children:[
      // 首页
      {
        path: "/index",
        name: "index",
        component: ()=>import("@/views/index/index"),
        meta: {
          title: '首页',
          keepAlive: true,
          requireAuth: true
        }
      },
      // 发现首页
      {
        path: "/findIndex",
        name: "findIndex",
        meta: {
          title: '发现',
          keepAlive: true,
          requireAuth: true
        },
        component: ()=>import("@/views/find/findIndex/findIndex")
      },
      // 我的首页
      {
        path: "/mineIndex",
        name: "mineIndex",
        meta: {
          title: '我的首页',
          keepAlive: true,
          requireAuth: true
        },
        component: ()=>import("@/views/mine/mineIndex/mineIndex")
      },
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: ()=>import("@/views/lib/404")
  },
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  // 配置激活时要使用的类名
  linkActiveClass:'router-link-active',
  routes
});

NProgress.configure({
  showSpinner: false
});

// 路由守卫
router.beforeEach((to, from, next) => {
  NProgress.start(); // 开启Progress
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (store.state.token) { // 通过vuex state获取当前的token是否存在
      next();
    } else {
      console.log(to.fullPath);
      next()
    }
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  // Toast.clear();
  NProgress.done(); // 结束Progress
});


export default router;
