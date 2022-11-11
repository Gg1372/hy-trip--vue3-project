<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import tabbarData from '@/assets/data/tabbar';
import { getAssetURL } from '@/utils/get_assets_img';

const currentIndex = ref(0);
// 监听路由变化时对应的索引
const route = useRoute();
watch(route, (newRoute) => {
  const index = tabbarData.findIndex((item) => item.path === newRoute.path);
  // 找不到对应索引则退出
  if (index === -1) return;
  currentIndex.value = index;
});
</script>

<template>
  <div class="tab-bar">
    <van-tabbar
      route
      :model-value="currentIndex"
      active-color="var(--primary-color)"
    >
      <van-tabbar-item
        v-for="(tabbarInfo, index) in tabbarData"
        :key="index"
        :to="tabbarInfo.path"
      >
        <template #icon>
          <img
            v-if="currentIndex !== index"
            :src="getAssetURL(tabbarInfo.image)"
          />
          <img v-else :src="getAssetURL(tabbarInfo.imageActive)" alt="" />
        </template>
        <span>{{ tabbarInfo.title }}</span>
      </van-tabbar-item>
    </van-tabbar>

    <!-- <template v-for="(tabbarInfo, index) in tabbarData" :key="index">
      <div class="tab-bar-item" :class="{ active: currentIndex === index }">
        <img
          v-if="currentIndex !== index"
          :src="getAssetURL(tabbarInfo.image)"
          @click="itemClick(index, tabbarInfo)"
        />
        <img v-else :src="getAssetURL(tabbarInfo.imageActive)" alt="" />
        <span class="text">{{ tabbarInfo.title }}</span>
      </div>
    </template> -->
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  /* 重写 vant UI库 变量 开始*/
  --van-tabbar-item-font-size: 14px;
  /* 重写 vant UI库 变量 结束*/
  img {
    height: 30px;
  }
}
</style>
