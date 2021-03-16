<template>
  <div class="header">
    <svg-icon class="header-icon" :name="icon" />
    <menu>
      <a
        v-for="link in links"
        :key="link.id"
        :href="link.url"
        :class="[{ active: currentIndex === link.id }]"
        @click="handleLinkClick(link.id)"
        >{{ link.name }}</a
      >
    </menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SvgIcon from "./SvgIcon.vue";

export default defineComponent({
  name: "AppHeader",
  components: {
    SvgIcon,
  },
  emits: ["handleMenuClick"],
  setup(props, ctx) {
    const links = [
      {
        id: 0,
        name: "Home",
        url: "#",
      },
      {
        id: 1,
        name: "About",
        url: "#",
      },
      {
        id: 2,
        name: "Friend",
        url: "#",
      },
      {
        id: 3,
        name: "Project",
        url: "#",
      },
    ];

    const currentIndex = ref(0);
    const icon = ref("Home");
    const handleLinkClick = (index: number) => {
      currentIndex.value = index;
      icon.value = links[index].name;
      ctx.emit("handleMenuClick", index);
    };

    return {
      links,
      icon,
      currentIndex,
      handleLinkClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 72px;
  padding: 0 42px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;

  .header-icon {
    width: 16px;
    height: 16px;
    padding: 6px;
    border: 1px solid #fd9baa;
    border-radius: 50%;
  }
  menu {
    a {
      color: #fda4af;
      position: relative;
      margin-right: 16px;
      padding-right: 16px;
      transition: color 0.3s ease-in-out;
      &.active,
      &:hover {
        color: #f43f5e;
      }
      &:not(:last-child)::after {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 3px;
        background-color: #fda4af;
      }
    }
  }
}
</style>
