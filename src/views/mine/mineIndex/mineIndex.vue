<template>
    <div id="mineIndex">
        <van-search class="my-search" v-model="value" placeholder="请输入搜索关键词"/>
    </div>
</template>

<script setup>
    import {Toast} from 'vant';
    import {ref} from 'vue';

    const value = ref('');

</script>

<style lang="scss" scoped>
    #mineIndex {
         /*.van-search {*/
            /*background-color: rebeccapurple;*/
        /*}*/
    }

</style>