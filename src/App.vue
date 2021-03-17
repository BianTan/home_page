<template>
  <app-header :index="index" />
  <div class="wrapper">
    <swiper ref="swiperRef" :basePage="index">
      <slide><home /></slide>
      <slide><about ref="aboutRef" /></slide>
      <slide><friend /></slide>
      <slide><project /></slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { MenuLinks } from "@/common/config";
import { getPath, useInfo, useProgress } from "@/common/utlis";
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
    const aboutRef = ref<any>(null);
    const index = ref(0);

    const switchPage = (url: string) => {
      const path = url.replace(/http:\/\/\S+?\//g, "");
      const index = MenuLinks.findIndex((link) => {
        return link.url === path;
      });
      return index;
    };

    const hashChange = (e: any) => {
      const path = getPath();
      const index = switchPage(e.newURL);
      const home = document.querySelector(".home");
      if (swiperRef.value) swiperRef.value.goPage(index);
      switch (path) {
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

    const bindEvent = () => {
      window.addEventListener("hashchange", hashChange, false);
    };

    const init = () => {
      index.value = switchPage(location.href);
      if (index.value < 0) {
        location.href = "/#home";
        index.value = 0;
      }
      bindEvent();
    };

    init();

    return {
      swiperRef,
      index,
      aboutRef,
    };
  },
});
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
