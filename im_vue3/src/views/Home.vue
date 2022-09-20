<template>
  <div class="home">
    <!-- live2d 头像 -->
    <div id="live2d_canvas" />
  </div>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue';

let timer: number | null = null

const init = () => {

  window.defineLive2D({
    resourcesPath: './Resources/'
  })

  if (window.LAppDelegate.getInstance().initialize() == false) {
    return;
  }
  window.LAppDelegate.getInstance().run()

  document.body.addEventListener('mouseleave', () => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      const down = new MouseEvent('mousedown')
      const up = new MouseEvent('mouseup')
      window.dispatchEvent(down)
      window.dispatchEvent(up)
    }, 1200)
  })
  document.body.addEventListener('mouseenter', () => {
    timer && clearTimeout(timer)
  })
}

onMounted(() => {
  init()
})

</script>

<style lang='scss' scoped>
.home {
  #live2d_canvas {
    width: 200px;
    height: 200px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #FFF1F3;
    box-shadow: 0px 1px 3px 0px rgb(226 102 120 / 20%), inset 0px 1px 3px 0px rgb(253 198 206 / 50%);
    border: 16px solid #FDC6CE;
    border-radius: 50%;
    position: relative;
    :deep(canvas) {
      width: 130%;
      height: 130%;
      position: absolute;
      object-fit: contain;
      left: 50%;
      transform: translate(-50%, calc(-30%));
    }
  }
}
</style>
