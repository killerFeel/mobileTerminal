<template>
  <div class="tabBar">
    <div class="foot_wrap">
      <router-link v-for="(el,y) in iconList" :to="el.page" :key="y" tag="div" class="foot_icon"
        :style="{width:`${100/iconList.length}%`}">
        <img :src="nowPage.indexOf(el.page)>-1?el.imged:el.img" alt="">
        <span>{{ el.txt }}</span>
      </router-link>
    </div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      iconList: [
        {img: require('../../../assets/images/index.svg'), imged: require('../../../assets/images/indexed.svg'), txt: '首页', page: '/index'},
        {img: require('../../../assets/images/news.svg'), imged: require('../../../assets/images/newsed.svg'), txt: '发现', page: '/findIndex'},
        {img: require('../../../assets/images/mine.svg'), imged: require('../../../assets/images/mineed.svg'), txt: '我的', page: '/mineIndex'},
      ],
      nowPage: '', // 当前页面
    }
  },
  beforeCreate() {

  },
  created() {
    // 获取当前所在页面
    this.nowPage = this.$route.path;
  },
  watch: {
    // 检测页面改变
    $route(to, form) {
      this.nowPage = to.path;
    }
  }
}
</script>

<style lang="scss" scoped>
.tabBar {
  //min-height: 100vh;
  background-color: #F4F5FA;
  box-sizing: border-box;
  padding-bottom: 1rem;
  position: relative;
  min-height: calc(100vh - 1.88rem);

  .foot_wrap {
    height: 1rem;
    box-sizing: border-box;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: .05rem;
    z-index: 9;
    background-color: #FFFFFF ;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);

    .foot_icon {
      height: 100%;
      box-sizing: border-box;
      padding: .1rem 0;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: space-between;
      img {
        width: .4rem;
        height: .4rem;
      }

      span {
        font-size: .22rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #101E32;
        line-height: .24rem;
      }
    }
  }
}

/* router-link 切换样式 */
.router-link-active > span {
  //color: #F62732 !important;
}
</style>
