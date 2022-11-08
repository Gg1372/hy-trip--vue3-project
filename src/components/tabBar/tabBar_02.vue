<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import tabbarData from '@/assets/data/tabbar';
import { getAssetURL } from '@/utils/get_assets_img';

const router = useRouter();

const currentIndex = ref(0);
const itemClick = (index, item) => {
  currentIndex.value = index;
  router.push(item.path);
};
</script>

<template>
  <div class="tab-bar">
    <template v-for="(tabbarInfo, index) in tabbarData" :key="index">
      <div
        class="tab-bar-item"
        :class="{ active: currentIndex === index }"
        @click="itemClick(index, tabbarInfo)"
      >
        <img
          v-if="currentIndex !== index"
          :src="getAssetURL(tabbarInfo.image)"
        />
        <img v-else :src="getAssetURL(tabbarInfo.imageActive)" alt="" />
        <span class="text">{{ tabbarInfo.title }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      color: var(--primary-color);
    }

    img {
      width: 36px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>
