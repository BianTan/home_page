<template>
  <div class="home g-container" @click="() => showCard = false">
    <div :class="['user-info', { active: showCard }]">
      <div class="live2d-container">
        <!-- live2d 头像 -->
        <div id="live2d_canvas" @click.stop="handleLive2DClick" />
        <!-- 移动端信息卡 -->
        <div class="power-card" @click.stop>
          <ProgressItem
            v-for="item in progressList"
            :key="item.label"
            :detail="item"
            class="item"
          />
        </div>
      </div>
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
    <div class="power-card pc-card">
      <ProgressItem
        v-for="item in progressList"
        :key="item.label"
        :detail="item"
        class="item"
      />
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, nextTick, onMounted } from 'vue'
import {
  socialMediaList,
  progressList
} from '@/assets/data'

let timer: number | null = null
const showCard = ref(false)

const live2dInit = () => {
  // 修改资源路径
  window.defineLive2D({
    resourcesPath: './live2d/'
  })

  if (window.LAppDelegate.getInstance().initialize() == false) return
  window.LAppDelegate.getInstance().run()

  // 鼠标移出窗口
  document.body.addEventListener('mouseleave', () => {
    timer && clearTimeout(timer)
    timer = window.setTimeout(() => {
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

// 头像点击
const handleLive2DClick = () => {
  showCard.value = !showCard.value
}

// 等待挂载完成进行 live2d 的初始化
onMounted(async () => {
  await nextTick()
  live2dInit()
})

</script>

<style lang='scss' scoped>
.home {
  .user-info {
    display: flex;
    align-items: flex-end;
    position: relative;
    padding-top: 115px;
    transition: .3s all ease-in-out;
    .live2d-container {
      position: relative;
      #live2d_canvas {
        width: 200px;
        height: 200px;
        z-index: 2;
        background: #FFF1F3;
        box-shadow: 0px 1px 3px 0px rgb(226 102 120 / 20%), inset 0px 1px 3px 0px rgb(253 198 206 / 50%);
        border: 16px solid #FDC6CE;
        border-radius: 50%;
        position: relative;
        flex-shrink: 0;
        :deep(canvas) {
          width: 130%;
          height: 130%;
          position: absolute;
          object-fit: contain;
          left: 50%;
          transform: translate(-50%, calc(-30%));
        }
      }
      .power-card {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        display: none;
        opacity: 0;
        visibility: hidden;
        transition: .3s ease-in-out;
      }
    }
    .detail {
      display: flex;
      flex-direction: column;
      padding: 12px 0 24px 64px;
      .name {
        order: 1;
        color: #FFF8F9;
        font-size: 48px;
        font-weight: 500;
      }
      .tips {
        order: 2;
        color: #FFF1F3;
        font-size: 18px;
      }
      .icon-list {
        order: 3;
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
    margin-bottom: 24px;
    padding: 32px 26px;
    border-radius: 12px;
    background-color: #FFF8F9;
    box-shadow: 0px 0px 3px 0px #E26678;
    .item:not(:last-child) {
      margin-bottom: 32px;
    }
  }
  @media (max-width: 960px) {
    .user-info {
      .live2d-container {
        #live2d_canvas {
          width: 120px;
          height: 120px;
        }
      }
      .detail {
        padding: 12px 0 12px 32px;
        .name {
          font-size: 24px;
        }
        .tips {
          font-size: 16px;
          margin-top: 4px;
        }
        .icon-list {
          margin-top: 12px;
        }
      }
    }
  }
  @media (max-width: 576px) {
    .user-info {
      flex-direction: column;
      align-items: center;
      text-align: center;
      .live2d-container {
        width: 100%;
        transition: .3s all ease-in-out;
        #live2d_canvas {
          width: 132px;
          height: 132px;
          margin: 0 auto;
          transition: .3s all ease-in-out;
        }
        :deep(.power-card) {
          display: unset;
          .item {
            .progress {
              height: 12px;
            }
            .label {
              font-size: 14px;
              text-align: left;
              margin-top: 6px;
            }
            &:not(:last-child) {
              margin-bottom: 12px;
            }
          }
        }
      }
      .detail {
        margin-top: 24px;
        width: 100%;
        padding: 0;
        transition: .3s all ease-in-out;
        .name {
          order: 2;
          margin-top: 4px;
        }
        .tips {
          order: 1;
        }
        .icon-list {
          margin-top: 46px;
          justify-content: space-evenly;
          .item {
            margin-right: 0 !important;
          }
        }
      }
      &.active {
        padding-top: 0;
        .live2d-container {
          #live2d_canvas {
            width: 46px;
            height: 46px;
            border-width: 6px;
            transform: translateY(24px);
          }
        }
        .power-card {
          opacity: 1;
          visibility: visible;
        }
        .detail {
          margin-top: 320px;
        }
      }
    }
    .pc-card {
      display: none !important;
    }
  }
}
</style>
