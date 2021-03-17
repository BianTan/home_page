<template>
  <div class="progress-wrapper">
    <div class="info">
      <p class="title">{{ title }}</p>
      <span class="description">{{ desc }}</span>
    </div>
    <div class="progerss">
      <div :style="`--width: ${progressWidth}%;`"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BdProgress",
  props: {
    title: {
      type: String,
      default: "默认标题",
    },
    desc: {
      type: String,
      default: "",
    },
    progressWidth: {
      type: Number,
      default: 100,
    },
  },
});
</script>

<style lang="scss" scoped>
.progress-wrapper {
  width: 100%;
  cursor: pointer;
  .info {
    display: flex;
    .title {
      font-size: 18px;
      color: #fb7185;
      margin-right: 16px;
    }
    .description {
      opacity: 0;
      font-size: 12px;
      color: #fc9fac;
      transition: 0.3s opacity ease-in-out;
    }
  }
  .progerss {
    width: 100%;
    height: 12px;
    border-radius: 6px;
    background-color: rgba(254, 205, 211, 0.64);
    overflow: hidden;
    position: relative;
    margin-top: 16px;
    div {
      background-color: #fc8a9b;
      border-radius: 6px;
      height: 100%;
    }
  }
  &:hover {
    .description {
      opacity: 1;
    }
  }
}
</style>
