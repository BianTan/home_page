<template>
  <div class="swiper-container" ref="swiperRef">
    <div class="swiper-wrapper">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import BdSwiper from "./BdSwiper";

export default defineComponent({
  name: "BdSwiper",
  props: {
    basePage: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const swiperRef = ref<HTMLElement | null>(null);
    const swiper = ref<BdSwiper | null>(null);

    const goPage = (index: number) => {
      swiper.value?.goPage(index);
    };

    onMounted(() => {
      if (swiperRef.value) {
        swiper.value = new BdSwiper(swiperRef.value, props.basePage);
        window.addEventListener(
          "resize",
          () => {
            swiper.value?.resize();
          },
          false
        );
      }
    });

    return {
      swiperRef,
      goPage,
    };
  },
});
</script>

<style lang="scss">
.swiper-container {
  height: 100%;
  .swiper-wrapper {
    height: 100%;
    display: flex;
    transform: translate3d(0, 0, 0);
    transition: transform ease;
  }
}
</style>