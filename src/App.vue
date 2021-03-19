<template>
  <app-header :index="index" />
  <div class="wrapper">
    <swiper ref="swiperRef" :basePage="index" @slideChange="slideChange">
      <template #content>
        <slide><home /></slide>
        <slide><about ref="aboutRef" /></slide>
        <slide><friend /></slide>
        <slide><project /></slide>
      </template>
      <navigation :currentIndex="index" color="f43f5e" />
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import mitt from "mitt";
import { MenuLinks } from "@/common/config";
import { useInfo, useProgress } from "@/common/utlis";
import AppHeader from "./components/AppHeader.vue";
import Swiper from "./common/swiper/index.vue";
import Slide from "./common/swiper/Slide.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Friend from "./views/Friend.vue";
import Project from "./views/Project.vue";
import Navigation from "./common/swiper/Navigation.vue";

export const emitter = mitt();

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
    Navigation,
  },
  setup() {
    const swiperRef = ref<any>(null);
    const aboutRef = ref<any>(null);
    const index = ref(0);

    const getPageIndex = (url: string) => {
      const path = url.replace(/http[s]{0,1}:\/\/\S+?\//g, "");
      const index = MenuLinks.findIndex((link) => {
        return link.url === path;
      });
      return index;
    };

    const slideChange = (newIndex: number) => {
      const home = document.querySelector(".home");
      const path = MenuLinks.find((item) => {
        return item.id === newIndex;
      });
      if (path) {
        index.value = path.id;
        location.href = path.url;
        emitter.emit("currentPageIndex", index.value);
      }
      switch (path?.url) {
        case "#home":
          if (home) useInfo(home as HTMLElement);
          break;
        case "#about":
          useProgress(aboutRef.value.progressListRef);
          break;
        case "#friend":
          break;
        case "#project":
          break;
        case "default":
          break;
      }
    };

    const init = () => {
      index.value = getPageIndex(location.href);
      if (index.value < 0) {
        location.href = "/#home";
        index.value = 0;
      }
    };

    init();

    return {
      swiperRef,
      index,
      aboutRef,
      slideChange,
    };
  },
});
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
