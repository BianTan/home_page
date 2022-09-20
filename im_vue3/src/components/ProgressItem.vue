<template>
  <div class="progress-item">
    <div class="progress" :style="{ '--progress-var': progress }" />
    <div class="label">{{ detail.label }}</div>
  </div>
</template>

<script lang='ts' setup>
  import { computed } from 'vue'
import { PowerItem } from '@/assets/data'

const prosp = withDefaults(defineProps<{
  detail: PowerItem;
}>(), {})

const progress = computed(() => {
  const { progress } = prosp.detail
  return typeof progress === 'number'
    ? `${progress * 100}%`
    : progress.includes('%') ? progress : `${progress}%`
})

</script>

<style lang='scss' scoped>
.progress-item {
  .progress {
    width: 100%;
    height: 18px;
    border-radius: 9px;
    background-color: #FEDCE1;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      border-radius: inherit;
      width: var(--progress-var);
      background-color: #FB7185;
      transition: .3s width ease-in-out;
      transition-duration: 3s;
    }
  }
  .label {
    color: #E26678;
    font-size: 18px;
    margin-top: 12px;
    font-weight: 500;
  }
}
</style>
