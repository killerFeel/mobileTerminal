<template>
    <div>
        <van-cell title="选择单个日期" :value="date" @click="show = true" />
        <van-calendar v-model:show="show" @confirm="onConfirm" />
    </div>
</template>

<script setup>
    import {ref} from "vue";
    import api from "@/fetch/test/api";
    const date = ref('');
    const show = ref(false);

    const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = (value) => {
        show.value = false;
        date.value = formatDate(value);
    };
    // 示例测试api

    api.getListAPI().then((res) => {

    })
</script>

<style scoped>

</style>