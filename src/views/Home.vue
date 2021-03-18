<template>
  <div class="home container">
    <info />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Info from "@/components/Info.vue";

export default defineComponent({
  name: "Home",
  components: {
    Info,
  },
});
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: flex-end;
}
</style>
