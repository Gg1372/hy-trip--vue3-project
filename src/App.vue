<script setup>
import TabBar from '@/components/tabBar/tabBar.vue';
import Loading from '@/components/loading/loading.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
    <loading></loading>
  </div>
</template>

<style lang="less" scoped></style>
