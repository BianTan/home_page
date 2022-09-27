<template>
  <div class="page-title">
    小扁担的<span>{{ text }}</span>
  </div>
</template>

<script lang='ts' setup>
withDefaults(defineProps<{
  text?: string;
}>(), {})
</script>

<style lang='scss' scoped>
.page-title {
  color: #FEDCE1;
  font-size: 28px;
  font-weight: 500;
  position: relative;
  padding-bottom: 12px;
  span {
    color: #FFF8F9;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 64px;
    height: 8px;
    border-radius: 8px;
    background-color: #E26678;
  }
}
</style>
