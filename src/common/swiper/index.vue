<template>
  <div class="swiper-container" ref="swiperRef">
    <div class="swiper-wrapper">
      <slot name="content" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import BdSwiper from "./BdSwiper";
export let swiper: BdSwiper;

export default defineComponent({
  name: "BdSwiper",
  props: {
    basePage: {
      type: Number,
      default: 0,
    },
  },
  emits: ["slideChange"],
  setup(props, { emit }) {
    const swiperRef = ref<HTMLElement | null>(null);
    const swiper = ref<any>(null)

    onMounted(() => {
      if (swiperRef.value) {
        swiper.value = new BdSwiper(swiperRef.value, {
          basePage: props.basePage,
          on: {
            slideChange: (newIndex: number, oldIndex: number) => {
              emit("slideChange", newIndex, oldIndex);
            },
          },
        });
      }
    });

    return {
      swiperRef,
      swiper
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