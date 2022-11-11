<script setup>
import { storeToRefs } from 'pinia';
import uesHomeStore from '@/stores/modules/home';
import HouseItemV9 from '@/components/house-item-v9/house-item-v9.vue';
import HouseItemV3 from '@/components/house-item-v3/house-item-v3.vue';

const homeStore = uesHomeStore();
const { houselist } = storeToRefs(homeStore);
</script>

<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in houselist" :key="item.data.houseId">
        <house-item-v9
          v-if="item.discoveryContentType === 9"
          :itemData="item.data"
        >
        </house-item-v9>
        <house-item-v3
          v-else-if="item.discoveryContentType === 3"
          :itemData="item.data"
        >
        </house-item-v3>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
