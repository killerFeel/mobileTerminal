<template>
    <div id="app404">
        <div class="img">
            <img :src="$store.state.publicPath+'images/404.svg'" alt="">
        </div>
        <div class="tip">
            <p class="cn">抱歉！您访问的页面不存在！</p>
            <p class="en">Sorry! The page you visited has been lost!</p>
        </div>
        <div class="backIndex" @click="backHome">返回首页</div>
    </div>
</template>

<script setup>
    import { useRouter} from 'vue-router';
    const Router = useRouter(); //获取到值
    const backHome = () => {
        return Router.push('/');
    }
</script>

<style lang="scss" scoped>
    #app404 {
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        padding-top: 20%;
        .img {
            img {
                width: 100%;
            }
            margin-bottom: .5rem;
        }
        .tip {
            display: flex;
            flex-flow: column;
            align-items: center;
            margin-bottom: .8rem;
            .cn {
                font-size: .32rem;
                margin-bottom: .2rem;
                line-height: .35rem;
                color: #3F86FF;
            }
            .en {
                font-size: .22rem;
                line-height: .25rem;
                color: #3F86FF;
            }
        }
        .backIndex {
            width: 40%;
            height: .8rem;
            background-color: #3F86FF;
            border-radius: .4rem;
            text-align: center;
            line-height: .8rem;
            font-size: .3rem;
            color: #fff;
            margin: 0 auto;
        }
    }
</style>