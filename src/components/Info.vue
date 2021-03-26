<template>
  <img src="@/assets/images/avatar.jpg" :class="['avatar', { small: small }]" />
  <div :class="['info-content', { small: small }]" ref="contentRef">
    <div :class="['info', { active: small }]">
      前端开发工程师 / 兴趣使然的设计 / 22 岁
    </div>
    <div class="name">我是笨蛋小扁担</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { getPath, useInfo } from '@/common/utlis'

export default defineComponent({
  name: 'Info',
  props: {
    small: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const contentRef = ref<HTMLElement | null>(null)

    onMounted(() => {
      const path = getPath()
      if (contentRef.value && path == '#home') useInfo(contentRef.value)
    })
    return {
      contentRef
    }
  }
})
</script>

<style lang="scss">
.home,
.about {
  .avatar {
    width: 320px;
    height: 320px;
    border: 16px solid rgb(252, 136, 153, 0.8);
    border-radius: 50%;
    box-sizing: border-box;
    &.small {
      width: 164px;
      height: 164px;
      border-width: 12px;
    }
  }
  .info-content {
    margin-left: 164px;
    margin-bottom: 24px;
    .info {
      font-size: 24px;
      color: #fda4af;
      transform: translateY(24px);
      opacity: 0;
      transition: 0.3s all ease-in-out;
    }
    .name {
      font-size: 72px;
      color: #fb7185;
      margin-top: 24px;
      font-family: monospace;
      background: #fff9fa;
      position: relative;
      z-index: 2;
    }
    &.small {
      margin-left: 0;
      margin-top: 42px;
      margin-bottom: 0;
      .info {
        font-size: 18px;
      }
      .name {
        font-size: 48px;
        margin-top: 16px;
        justify-content: end;
      }
    }
  }
}
</style>
