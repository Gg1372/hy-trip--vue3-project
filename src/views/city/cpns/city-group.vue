<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import useCityStore from '@/stores/modules/city';

const router = useRouter();
const cityStore = useCityStore();

// 定义props
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});

// 自定义列表索引数据
const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group);
  list.unshift('#');
  return list;
});

// 监听城市点击
const cityClick = (city) => {
  cityStore.currentCity = city;
  // 返回上一级
  router.back();
};
</script>

<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门 " />
      <div class="list">
        <template v-for="city in groupData?.hotCities" :key="city.cityId">
          <div class="city" @click="cityClick(city)">
            {{ city.cityName }}
          </div>
        </template>
      </div>

      <template v-for="(group, index) in groupData?.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="city in group.cities" :key="city.cityId">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .city {
    width: 70px;
    height: 28px;
    line-height: 28px;
    border-radius: 14px;
    font-size: 14px;
    color: #000;
    text-align: center;
    background-color: #fff4cc;
    margin: 6px 0;
  }
}
</style>
