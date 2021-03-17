<template>
  <div class="info-card">
    <a :href="url" target="_blank">
      <div class="content" :style="`fill: #${color}`">
        <div class="icon">
          <slot />
        </div>
        <p>{{ name }}</p>
      </div>
      <div :style="`background-color: #${color};`" class="after" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InfoCard",
  props: {
    name: {
      type: String,
      default: "Hello",
    },
    url: {
      type: String,
      default: "#",
    },
    color: {
      type: String,
      default: "#333",
    },
  },
});
</script>

<style lang="scss" scoped>
.info-card {
  width: 115px;
  height: 134px;
  border: 1px solid #f8f8f8;
  border-radius: 8px;
  background-color: white;
  display: inline-block;
  overflow: hidden;
  box-shadow: 0 6px 12px -6px rgba(0, 0, 0, 0.1);
  a {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    .content {
      position: relative;
      z-index: 10;
      text-align: center;
      .icon {
        width: 32px;
        height: 32px;
        margin: 0 auto;
        transform: translate3d(0, 8px, 0);
        transition: 0.2s all ease-in-out;
        transition-delay: 0.1s;
      }
      p {
        opacity: 0;
        transition: 0.2s all ease-in-out;
        transition-delay: 0.1s;
      }
    }
    .after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 6px;
      transition: 0.3s height ease-in-out;
    }
  }
  &:hover {
    .content {
      fill: white !important;
      .icon {
        transform: translate3d(0, -6px, 0);
      }
      p {
        opacity: 1;
        color: white;
        transform: translate3d(0, 6px, 0);
      }
    }
    .after {
      height: 100%;
    }
  }
}
</style>
