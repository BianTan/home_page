<template>
  <div class="link-wrapper">
    <a :href="url" class="link-a" target="_blank">
      <img :src="avatar" :alt="title" class="link-avatar" />
      <div class="link-info">
        <div class="link-title">{{ title }}</div>
        <div class="link-desc">{{ desc }}</div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FriendCard",
  props: {
    title: String,
    avatar: String,
    url: String,
    desc: String,
  },
});
</script>

<style lang="scss" scoped>
.link-wrapper {
  width: 100%;
  transition: 0.3s all ease-in-out;
  .link-a {
    margin: 24px 20px;
    height: 100%;
    display: flex;
    overflow: hidden;
    padding: 12px 8px;
    border-radius: 6px;
    background: #ffffff;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    color: #fda4af;
    border: 1px solid #f8f8f8;
    box-shadow: 0 12px 20px -12px rgba(253, 164, 174, 0.16);
    transition: 0.3s all ease-in-out;
    border: 1px solid rgba(253, 164, 175, 0);
    .link-avatar {
      width: 56px;
      height: 56px;
      padding: 0 !important;
      align-self: center;
      border-radius: 50%;
      background: #f6f6f6;
      transform: translateY(24px);
      transition-delay: 0.1s;
      transition: 0.3s all ease-in-out;
      border: 1px solid rgba(253, 164, 175, 0);
    }
    .link-info {
      text-align: center;
      transform: translateY(120%);
      opacity: 0;
      transition: 0.3s all ease-in-out;
      .link-title {
        font-size: 14px;
        margin-top: 8px;
        line-height: 1rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      .link-desc {
        font-size: 12px;
        margin-top: 2px;
        line-height: 1rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
    }
  }
  &:hover {
    transform: translateY(-8px);
    .link-a {
      box-shadow: 0 8px 10px rgba(253, 164, 174, 0.24);
      border: 1px solid rgba(253, 164, 175, 0.32);
      .link-avatar,
      .link-info {
        transform: translateY(0);
        opacity: 1;
      }
      .link-avatar {
        box-shadow: 2px 6px 12px rgba(253, 164, 175, 0.12);
        border: 1px solid rgba(253, 164, 175, 0.12);
      }
    }
  }
}
</style>
