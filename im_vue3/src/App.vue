<template>
  <div class="header"></div>
  <div class="page-container">
    <Home class="page" />
    <Friends class="page" />
    <Projects class="page"/>
  </div>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
.page-container {
  height: 100%;
  display: flex;
  .page {
    width: 100%;
    flex-shrink: 0;
  }
}
</style>
