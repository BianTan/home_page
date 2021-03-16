<template>
  <app-header @handleMenuClick="handleMenuClick" />
  <div class="wrapper">
    <swiper ref="swiperRef">
      <slide><home /></slide>
      <slide><about /></slide>
      <slide><friend /></slide>
      <slide><project /></slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppHeader from "./components/AppHeader.vue";
import Swiper from "./common/swiper/index.vue";
import Slide from "./common/swiper/Slide.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Friend from "./views/Friend.vue";
import Project from "./views/Project.vue";

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
    Swiper,
    Slide,
    Home,
    About,
    Friend,
    Project,
  },
  setup() {
    const swiperRef = ref<any>(null);
    const handleMenuClick = (index: number) => {
      if (swiperRef.value) swiperRef.value.goPage(index);
    };

    return {
      swiperRef,
      handleMenuClick,
    };
  },
});
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
