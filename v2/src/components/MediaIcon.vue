<template>
  <div
    :class="['media-item', { active: isActive }]"
    @click="handleClick"
  >
    <img
      :src="detail.icon"
      :alt="detail.name"
      class="icon"
    >
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { SocialMediaItem } from '@/assets/data'

const props = withDefaults(defineProps<{
  detail: SocialMediaItem;
}>(), {})
const isActive = ref(false)

const handleClick = () => {
  if (isActive.value) return
  isActive.value = true
  setTimeout(() => {
    isActive.value = false
    setTimeout(() => window.open(props.detail.url, '_blank'), 300)
  }, 150)
}

</script>

<style lang='scss' scoped>
.media-item {
  user-select: none;
  width: 56px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  cursor: pointer;
  transition: all .3s ease;
  background-color: rgba(253, 198, 206, 0.24);
  box-shadow: 0px 1px 3px 0px rgba(226,102,120,0.2),
  inset 0px 1px 0px 0px rgba(253,198,206,0.8),
  inset 0px 1px 3px 0px rgba(226,102,120,0);
  .icon {
    width: 28px;
    height: auto;
    transition: opacity .4s ease;
  }
  &.active, &:active {
    box-shadow: 0px 1px 3px 0px rgba(226,102,120,0),
    inset 0px 1px 0px 0px rgba(253,198,206,0),
    inset 0px 1px 3px 0px rgba(226,102,120,0.5);
    .icon {
      opacity: 0.6;
    }
  }
}
</style>
