<template>
  <div class="friends">
    <div class="g-container">
      <PageTitle text="朋友们" />
      <div class="friends-list">
        <li
          v-for="item in friendList"
          :key="item.id"
          class="item"
        >
          <FriendsCard :detail="item" />
        </li>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { friendList } from '@/assets/data'

</script>

<style lang='scss' scoped>
.friends {
  padding: 24px 0;
  box-sizing: border-box;
  .friends-list {
    margin: 24px -6px;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 33.33%;
      padding: 6px;
      box-sizing: border-box;
    }
  }
  @media (max-width: 960px) {
    .friends-list {
      .item {
        width: 50%
      }
    }
  }
  @media (max-width: 576px) {
    .friends-list {
      .item {
        width: 100%;
      }
    }
  }
}
</style>
