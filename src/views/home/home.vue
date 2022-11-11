<script setup>
import { ref, watch } from 'vue ';

import HomeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from './cpns/home-search-box.vue';
import HomeCategories from './cpns/home-categories.vue';
import SearchBar from '@/components/search-bar/search-bar.vue';
import HomeContent from './cpns/home-content.vue';
import uesHomeStore from '@/stores/modules/home';

import useScroll from '@/hooks/useScroll';
import { computed } from '@vue/runtime-core';

// 发送网络请求 - 热门建议
const homeStore = uesHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData();
homeStore.fetchHouselistData();

// 滚动显示更多
const { isReachBottom, scrollTop } = useScroll();
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false;
    });
  }
});

// 搜索框显示的控制
// const isShowSearchBar = ref(false);
// watch(scrollTop, (newValue) => {
//   isShowSearchBar.value = newValue > 100;
// });
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 350;
});
</script>

<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box></home-search-box>
    <home-categories></home-categories>

    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar :startDate="startDate" :endDate="endDate"></search-bar>
    </div>

    <home-content></home-content>
  </div>
</template>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;
}

.banner {
  img {
    width: 100%;
  }
}

.search-bar {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>
