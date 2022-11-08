<script setup>
// vue核心
import { ref } from 'vue';

// 本地代码
import tabbarData from '@/assets/data/tabbar';
import { getAssetURL } from '@/utils/get_assets_img';

const currentIndex = ref(0);
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="var(--primary-color)">
      <van-tabbar-item
        v-for="(tabbarInfo, index) in tabbarData"
        :key="index"
        :to="tabbarInfo.path"
        icon="home-o"
      >
        <!-- <template #icon>
          <img
            v-if="currentIndex !== index"
            :src="getAssetURL(tabbarInfo.image)"
          />
          <img v-else :src="getAssetURL(tabbarInfo.imageActive)" alt="" />
        </template> -->
        {{ tabbarInfo.title }}
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
  // --van-tabbar-item-font-size: 14px;
  /* 重写 vant UI库 变量 结束*/

  :deep(.van-icon) {
    font-size: 40px;
  }
  img {
    height: 30px;
  }
}
</style>
