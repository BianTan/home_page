<template>
  <div class="swiper-navigation" :style="[{ fill: `#${color}` }]">
    <transition name="slide-fade">
      <div
        v-show="currentIndex > 0"
        class="swiper-prev"
        @click="handlePrevClick"
      >
        <svg-icon name="left" />
      </div>
    </transition>
    <transition name="slide-fade">
      <div
        v-show="currentIndex < swiperNum - 1"
        class="swiper-next"
        @click="handleNextClick"
      >
        <svg-icon name="right" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref } from "vue";
import { swiper } from "./index.vue";
import SvgIcon from "@/components/SvgIcon.vue";

export default defineComponent({
  name: "Navigation",
  components: {
    SvgIcon,
  },
  props: {
    color: {
      type: String,
      default: "2e3a59",
    },
    currentIndex: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const swiperNum = ref(-1);
    const handlePrevClick = () => {
      swiper.prev();
    };
    const handleNextClick = () => {
      swiper.next();
    };

    onMounted(async () => {
      await nextTick();
      swiperNum.value = swiper.swiperNum;
    });

    return {
      handlePrevClick,
      handleNextClick,
      swiperNum,
    };
  },
});
</script>

<style lang="scss">
.swiper-navigation {
  .swiper-prev,
  .swiper-next {
    transition: 0.6s opacity ease-in-out;
    transform: translate(0, -50%);
    position: absolute;
    top: 50%;
    cursor: pointer;
    &:hover {
      animation-play-state: paused;
    }
  }
  .swiper-prev {
    left: 48px;
    animation: left-bounce 1.75s infinite;
  }
  .swiper-next {
    right: 48px;
    animation: right-bounce 1.75s infinite;
  }
}
@media (max-width: 640px) {
  .swiper-navigation {
    .swiper-prev,
    .swiper-next {
      top: auto;
      bottom: 72px;
    }
    .swiper-prev {
      left: 24px;
    }
    .swiper-next {
      right: 24px;
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
@keyframes left-bounce {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(-50%);
  }
  20% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(-25%);
  }
  40% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10%);
  }
  60% {
    transform: translateX(0);
  }
  70% {
    transform: translateX(0);
  }
  80% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes right-bounce {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(50%);
  }
  20% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(25%);
  }
  40% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10%);
  }
  60% {
    transform: translateX(0);
  }
  70% {
    transform: translateX(0);
  }
  80% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
