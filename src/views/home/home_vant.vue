<script setup>
import { ref } from 'vue';

const value = ref(3);

const rateIncrement = () => {
  value.value++;
};
</script>

<template>
  <div class="home">
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <van-rate v-model="value" :size="30" color="#000" />
    <button @click="rateIncrement">评分+1</button>
  </div>
</template>

<style lang="less" scoped></style>
