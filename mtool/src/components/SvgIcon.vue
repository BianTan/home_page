<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 32px;
  height: 32px;
  overflow: hidden;
}
</style>