import axios from "axios";
// vuex store的路径
import store from "@/store/index";
// vant 提示
import { Toast } from "vant";
// 路由
import router from "vue-router";

// axios 配置
// 创建axios实例
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
const service = axios.create({
    // 超时
    timeout: 30000
});
//拦截 token
service.interceptors.request.use(
    config=>{
        // 每次发送请求之前判断是否存在token
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，token也有可能是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = store.state.token;
        token && (config.headers.Authorization = token);
        // config.headers['token']=''     //没有登陆界面时，可以不携带token
        return config
    },
    error=>{
        return Promise.reject(error)
    });
// 响应拦截器
service.interceptors.response.use(response=>{
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据，否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟后台开发人员协商好统一的错误状态码
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error=>{
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 401:
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;

                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面
                case 403:
                    Toast({
                        duration:2000,
                        message:'登录过期,请重新登录'
                    });
                    // 清除token
                    sessionStorage.removeItem('token');
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
                    break;
                // 404请求不存在
                case 404:
                    Toast({
                        duration:3000,
                        message:'网络请求不存在'
                    });
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    Toast({
                        duration:4000,
                        message:error.response.data.message
                    });
            }
            return Promise.reject(error.response);
        }
    });
export default service;