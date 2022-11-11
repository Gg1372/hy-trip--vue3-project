<script setup></script>

<template>
  <div class="search">开始时间：{{ $route.query.startDate }}</div>
  <div class="search">结束时间：{{ $route.query.endDate }}</div>
  <div class="search">当前城市{{ $route.query.currentCity }}</div>
</template>

<style lang="less" scoped></style>
