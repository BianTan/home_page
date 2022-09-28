<template>
  <a :href="detail.url" class="friends-card" target="_blank">
    <div class="card-bg" />
    <img :src="`https://im.biandan.me${detail.avatar}`" :alt="detail.name" class="avatar">
    <div class="info">
      <div class="name">{{ detail.name }}</div>
      <div class="desc">{{ detail.desc }}</div>
    </div>
  </a>
</template>

<script lang='ts' setup>
import type { FriendDetail } from '@/assets/data'

withDefaults(defineProps<{
  detail: FriendDetail;
}>(), {})
</script>

<style lang='scss' scoped>
.friends-card {
  width: 100%;
  display: flex;
  height: 92px;
  padding: 0 18px;
  align-items: center;
  border-radius: 12px;
  text-decoration: none;
  box-sizing: border-box;
  box-shadow: 0px 0px 3px 0px #E26678;
  position: relative;
  transition: all .3s ease;
  .card-bg {
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background-color: #FFF8F9;
  }
  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 12px;
  }
  .info {
    flex: 1;
    padding-left: 18px;
    .name {
      color: #FB7185;
      font-size: 16px;
      line-height: 22px;
    }
    .desc {
      color: #FC9CAA;
      font-size: 12px;
      line-height: 17px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  &::after {
    content: '';
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(0);
    border-radius: 24px;
    transition: all ease .3s;
    background-color: #FEDCE1;
  }
  &:hover {
    transform: translateY(-8px) scale(1.03);
    border-color: #FEDCE1;
    &::after {
      transform: translateY(8px) scaleX(0.8);
      filter: blur(6px);
    }
  }
}
</style>
