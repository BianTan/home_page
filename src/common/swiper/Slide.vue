<template>
  <div class="swiper-slide">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.swiper-slide {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
}
</style>
