<template>
  <div class="friend container">
    <h1>小扁担的<i>朋友们</i></h1>
    <div class="content">
      <li class="link-li" v-for="link in friendList" :key="link.id">
        <friend-card
          :title="link.title"
          :desc="link.desc"
          :url="link.url"
          :avatar="link.avatar"
        />
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FriendCard from "@/components/FriendCard.vue";
import { friendList } from "@/common/config";

export default defineComponent({
  name: "Friend",
  components: {
    FriendCard,
  },
  setup() {
    return {
      friendList,
    };
  },
});
</script>

<style lang="scss">
.friend {
  .content {
    margin-top: 56px;
    display: flex;
    flex-wrap: wrap;
    .link-li {
      width: 25%;
    }
  }
}
</style>
