<template>
    <div :class="navData.title === undefined ? '' : 'appHasNav'">
        <myNav v-if="navData.title != undefined" :navData="navData"></myNav>
        <!-- 导航栏组件预留位 -->
        <!-- 内容主体 -->
        <div id="content">
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component
                            :is="Component"
                            v-if="$route.meta.keepAlive"
                            :key="$route.path"
                    />
                </keep-alive>
                <component :is="Component" v-if="!$route.meta.keepAlive"/>
            </router-view>
        </div>
    </div>
</template>

<script>
    import myNav from "@/components/lib/headTop/index";
    import {reactive, toRefs} from "vue";

    export default {
        name: "App",
        components: {
            myNav,
        },
        setup() {
            const state = reactive({
                navData: {title: undefined, back: false},
            });
            return {
                ...toRefs(state),
            };
        },
        watch: {
            //使用watch 监听$router的变化
            $route(to, from) {
                //如果to索引大于from索引,判断为前进状态,反之则为后退状态
                this.navData = to.meta;
            },
        },
    };
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .appHasNav {
        padding-top: 0.88rem;
    }
</style>
