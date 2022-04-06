<template>
    <div>
        <van-circle
                v-model:current-rate="currentRate"
                :rate="30"
                :speed="100"
                :text="text"
        />
    </div>
</template>

<script setup>
    import {computed,ref} from "vue";
    const currentRate = ref(0);
    const text = computed(() => currentRate.value.toFixed(0) + '%');
</script>

<style scoped>

</style>