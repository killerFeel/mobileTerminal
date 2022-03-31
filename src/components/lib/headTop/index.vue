<template>
  <div id="nav">
    <div v-if="navData['back'] || false" class="nav_back">
      <img src="../../../assets/images/left.svg" alt="" @click="back" />
    </div>
    <p class="nav_title">{{ title }}</p>
    <!-- 功能按钮 -->
    <div class="nav_funBlock" v-if="navData['funType'] || false">

    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRoute , useRouter} from 'vue-router';
export default {
  name: "index",
  props: ["navData"],
  setup(props, ctx) {
    const Route = useRoute(); //获取到值
    const Router = useRouter(); //获取到值
    const state = reactive({
      navData: props.navData,
      title: Route.meta["title"] || "",
    });
    const back = () => {

      Router.back();

    };
    return {
      ...toRefs(state),
      back
    };
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      this.title = to.meta["title"] || "";
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  width: 100%;
  height: 0.88rem;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-bottom: 1px solid #f8f8f8;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #ffffff;
  .nav_title {
    font-size: 0.32rem;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #101e32;
    line-height: 0.88rem;
  }
  .nav_funBlock {
    position: absolute;
    right: .24rem;
  }
  .nav_back {
    position: absolute;
    left: 0.24rem;
    width: 0.4rem;
    height: 0.4rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
