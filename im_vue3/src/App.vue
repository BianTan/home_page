<template>
  <div class="g-container">
    <div class="header">
      <div class="logo"></div>
      <ul class="menu">
        <li
          v-for="item in menuList"
          :key="item.id"
          :class="['menu-item', { active: item.id === activeIndex }]"
          @click="() => handleItemClick(item.id)"
        >{{ item.name }}</li>
      </ul>
    </div>
  </div>
  <div
    class="page-container"
    :style="{
      transform: `translate(-${winWidth * activeIndex}px, 0)`
    }"
  >
    <Home class="page" />
    <Friends class="page" />
    <Projects class="page"/>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

import { menuList } from '@/assets/data'

const { width: winWidth } = useWindowSize()
const activeIndex = ref(0)

const handleItemClick = (id: number) => {
  if (activeIndex.value === id) return
  activeIndex.value = id
}

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
      &::before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        right: 0;
        height: 0;
        bottom: 0;
        background-color: #E26678;
        transition: .3s height ease-in-out;
      }
      &.active {
        color: #FFF8F9;
        &::before {
          height: 6px;
          border-radius: 6px;
        }
      }
      &:not(:last-child) {
        margin-right: 16px;
        padding-right: 16px;
        &::before {
          right: 16px;
        }
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -1.5px;
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
.page-container {
  flex: 1;
  display: flex;
  overflow: hidden;
  transition: .3s transform ease;
  .page {
    width: 100%;
    flex-shrink: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
