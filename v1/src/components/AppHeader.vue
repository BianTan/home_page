<template>
  <div class="header">
    <svg-icon class="header-icon" :name="icon" />
    <menu>
      <a
        v-for="link in MenuLinks"
        :key="link.id"
        :href="link.url"
        :class="[{ active: currentIndex === link.id }]"
        @click="handleLinkClick(link.id)"
        >{{ link.name }}</a
      >
    </menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { MenuLinks } from '@/common/config'
import { getPageIndex } from '@/common/utlis'
import { swiper } from '@/common/swiper/index.vue'
import { emitter } from '@/App.vue'
import SvgIcon from './SvgIcon.vue'

export default defineComponent({
  name: 'AppHeader',
  components: {
    SvgIcon
  },
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const currentIndex = ref(props.index)
    const icon = ref('Home')

    icon.value = MenuLinks[currentIndex.value].name

    const setIndex = (index: number) => {
      currentIndex.value = index
      icon.value = MenuLinks[index].name
    }
    const handleLinkClick = (index: number) => setIndex(index)

    window.addEventListener('hashchange', (e: any) => {
      const index = getPageIndex(e.newURL)
      swiper.goPage(index)
    })
    emitter.on('currentPageIndex', index => {
      setIndex(index)
    })

    return {
      MenuLinks,
      icon,
      currentIndex,
      handleLinkClick
    }
  }
})
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 72px;
  padding: 0 42px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;

  .header-icon {
    width: 16px;
    height: 16px;
    padding: 6px;
    border: 1px solid #fd9baa;
    border-radius: 50%;
  }
  menu {
    a {
      color: #fda4af;
      position: relative;
      transition: color 0.3s ease-in-out;
      &:not(:last-child) {
        margin-right: 16px;
        padding-right: 16px;
      }
      &.active,
      &:hover {
        color: #f43f5e;
      }
      &:not(:last-child)::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 3px;
        background-color: #fda4af;
      }
    }
  }
}
</style>
