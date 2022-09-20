<template>
  <div class="home">
    <div class="g-container">
      <div class="user-info">
        <!-- live2d 头像 -->
        <div id="live2d_canvas" />
        <div class="detail">
          <div class="name">我是笨蛋小扁担</div>
          <div class="tips">前端开发工程师 / 兴趣使然的设计 / 23 岁</div>
          <div class="icon-list">
            <MediaIcon
              v-for="item in socialMediaList"
              :key="item.name"
              :detail="item"
              class="item"
            />
          </div>
        </div>
      </div>
      <div class="power-card">
        <ProgressItem
          v-for="item in progressList"
          :key="item.label"
          :detail="item"
          class="item"
        />
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { nextTick, onMounted } from 'vue'
import {
  socialMediaList,
  progressList
} from '@/assets/data'

let timer: number | null = null

const live2dInit = () => {
  if (window.LAppDelegate.getInstance().initialize() == false) return
  window.LAppDelegate.getInstance().run()

  // 鼠标移出窗口
  document.body.addEventListener('mouseleave', () => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      const down = new MouseEvent('mousedown')
      const up = new MouseEvent('mouseup')
      window.dispatchEvent(down)
      window.dispatchEvent(up)
    }, 1200)
  })
  // 鼠标移入窗口
  document.body.addEventListener('mouseenter', () => {
    timer && clearTimeout(timer)
  })
}

// 等待挂载完成进行 live2d 的初始化
onMounted(async () => {
  await nextTick()
  live2dInit()
})

</script>

<style lang='scss' scoped>
.home {
  .g-container {
    padding-top: 115px;
  }
  .user-info {
    display: flex;
    align-items: flex-end;
    #live2d_canvas {
      width: 200px;
      height: 200px;
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
    .detail {
      padding: 12px 0 24px 64px;
      .name {
        color: #FFF8F9;
        font-size: 48px;
        font-weight: 500;
      }
      .tips {
        color: #FFF1F3;
        font-size: 18px;
      }
      .icon-list {
        display: flex;
        align-items: center;
        margin-top: 22px;
        .item:not(:last-child) {
          margin-right: 24px;
        }
      }
    }
  }
  .power-card {
    margin-top: 62px;
    padding: 32px 26px;
    border-radius: 12px;
    background-color: #FFF8F9;
    box-shadow: 0px 0px 3px 0px #E26678;
    .item:not(:last-child) {
      margin-bottom: 32px;
    }
  }
}
</style>
