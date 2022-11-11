<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { getCityAll } from '@/service';
import useCityStore from '@/stores/modules/city';
import cityGroup from './cpns/city-group.vue';

const router = useRouter();

// 1. 搜索框功能
const searchValue = ref('');
const cancelClick = () => {
  router.back();
};

// 2. tab切换功能
const tabActive = ref('cityGroup');

/**
 * 这个位置发送网络请求有两个缺点：
 *  1. 如果网络请求太多，那么页面组件中包含大量的对于网络请求和数据的处理逻辑
 *  2. 如果页面封装了很多子组件，子组件需要这些数据，我们必须进一步将数据传递过去
 */
// 网络请求，请求城市的数据
// const allCity = ref({});
// getCityAll().then((res) => {
//   allCity.value = res.data;
//   console.log(res);
// });

// 从 Store中获取数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);

// 获取选中标签后的数据
const currentGroup = computed(() => allCities.value[tabActive.value]);
</script>

<template>
  <div class="city top-page">
    <div class="top">
      <!-- 1. 搜索框 -->
      <van-search
        v-model="searchValue"
        show-action
        shape="round"
        placeholder="城市区域位置"
        @cancel="cancelClick"
      />

      <!-- 2. tab切换 -->
      <van-tabs v-model:active="tabActive" color="var(--primary-color)">
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key) in allCities" :key="key">
        <city-group :groupData="value" v-show="tabActive === key"></city-group>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
