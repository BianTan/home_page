<template>
  <app-header :index="index" />
  <div class="wrapper" v-cloak>
    <swiper :basePage="index" @slideChange="slideChange">
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
import { defineComponent, reactive, toRefs } from "vue";
import { MenuLinks } from "@/common/config";
import { useInfo, useProgress, getPageIndex } from "@/common/utlis";
import mitt from "mitt";
import AppHeader from "./components/AppHeader.vue";
import Swiper from "./common/swiper/index.vue";
import Slide from "./common/swiper/Slide.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Friend from "./views/Friend.vue";
import Project from "./views/Project.vue";
import Navigation from "./common/swiper/Navigation.vue";

export const emitter = mitt();
interface StateRef {
  aboutRef: any;
  index: number;
}

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
    const state: StateRef = reactive({
      aboutRef: null,
      index: 0,
    });
    const mutations = reactive({
      /**
       * 当 swiperSlide 变化时触发
       * @param newIndex swiper 切换后的页面 index
       * @param oldIndex swiper 切换前的页面 index
       */
      slideChange: (newIndex: number) => {
        const home = document.querySelector(".home");
        const path = MenuLinks.find((item) => {
          return item.id === newIndex;
        });
        if (path) {
          state.index = path.id;
          location.href = path.url;
          emitter.emit("currentPageIndex", state.index);
        }
        switch (path?.url) {
          case "#home":
            if (home) useInfo(home as HTMLElement);
            break;
          case "#about":
            useProgress(state.aboutRef.progressListRef);
            break;
          case "#friend":
            break;
          case "#project":
            break;
          case "default":
            break;
        }
      },
    });

    const init = () => {
      state.index = getPageIndex(location.href);
      if (state.index < 0) {
        location.href = "/#home";
        state.index = 0;
      }
    };

    init();

    return {
      ...toRefs(state),
      ...toRefs(mutations),
    };
  },
});
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
