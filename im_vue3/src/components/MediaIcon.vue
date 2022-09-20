<template>
  <div class="media-item">
    <img
      :src="detail.icon"
      :alt="detail.name"
      class="icon"
    >
  </div>
</template>

<script lang='ts' setup>
import { SocialMediaItem } from '@/assets/data'

withDefaults(defineProps<{
  detail: SocialMediaItem;
}>(), {})

</script>

<style lang='scss' scoped>
.media-item {
  width: 56px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  cursor: pointer;
  background-color: rgba(253, 198, 206, 0.24);
  box-shadow: 0px 1px 3px 0px rgba(226,102,120,0.2), inset 0px 1px 0px 0px rgba(253,198,206,0.8);
  .icon {
    width: 28px;
    height: auto;
  }
}
</style>
