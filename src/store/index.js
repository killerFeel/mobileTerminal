import { createStore } from 'vuex';
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import modules from "./modules";


const state = {
  publicPath: process.env.BASE_URL, // 本地图片引用路径
  token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : false,

  //验证码初始化
  smsCode: {
    changeNumber: 60,
    changeText: '获取验证码',
    disabled: false,
    timer: ''
  },
  webSocketMsg: '', // webSocketMsg接收消息
};
export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules
})
