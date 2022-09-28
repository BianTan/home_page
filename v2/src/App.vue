<template>
  <div class="g-container">
    <div class="header">
      <div class="logo"></div>
      <ul class="menu">
        <li
          v-for="item in menuList"
          :key="item.id"
          :class="['menu-item', { active: item.id === activeIndex }]"
          @click="() => handleItemClick(item)"
        >{{ item.name }}</li>
      </ul>
    </div>
  </div>
  <div class="main">
    <div
      class="page-container"
      :style="{
        transform: `translate(-${(winWidth - 8) * activeIndex}px, 0)`,
        transitionDuration: animation ? '.3s' : '0s'
      }"
    >
      <Home class="page" />
      <Friends class="page" />
      <Projects class="page"/>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'

import { menuList } from '@/assets/data'

const { width: winWidth } = useWindowSize()
const activeIndex = ref(0)
const animation = ref(false)

const handleItemClick = (item: {
  id: number;
  name: string;
  url: string;
}, init = false) => {
  if (!init && activeIndex.value === item.id) return
  activeIndex.value = item.id
  history[init ? 'replaceState' : 'pushState'](null, document.title, item.url)
}

const init = () => {
  const url = location.hash || '#home'
  const item = menuList.find(f => (f.url).includes(url))
  handleItemClick(item ? item : menuList[0], true)
  
  // 监听 hash 变化，back 时更新页面 index
  window.addEventListener('hashchange', () => {
    activeIndex.value = menuList.find(f => (f.url).includes(location.hash))?.id || 0
  })
}
init()

let animationTimer: number | null = null
watch(() => activeIndex.value, () => {
  animationTimer && clearTimeout(animationTimer)
  animation.value = true
  animationTimer = window.setTimeout(() => animation.value = false, 320)
})

</script>

<style lang='scss' scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  .menu {
    display: flex;
    &-item {
      font-size: 16px;
      line-height: 22px;
      color: #FEDCE1;
      cursor: pointer;
      position: relative;
      z-index: 1;
      margin: 0 16px;
      &::before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        right: 0;
        height: 0;
        bottom: 0;
        border-radius: 8px;
        background-color: #E26678;
        transition: .3s height ease-in-out;
      }
      &.active {
        color: #FFF8F9;
        &::before {
          height: 8px;
        }
      }
      &:not(:last-child) {
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -17.5px;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          transform: translateY(-50%);
          background-color: #FEDCE1;
        }
      }
    }
  }
}
.main {
  flex: 1;
  overflow: auto;
  overflow-x: hidden;
}
.page-container {
  width: 100%;
  height: 100%;
  display: flex;
  transition: 0s all ease-in-out;
  .page {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>
