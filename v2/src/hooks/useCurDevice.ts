import { computed } from 'vue'

export function useCurDevice() {
  
  const isMobile = computed(() => {
    return /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)
  })
  const isIOS = computed(() => {
    return /(iPhone|iPod|ios|iPad)/i.test(navigator.userAgent)
  })
  const isWechat = computed(() => /micromessenger/i.test(navigator.userAgent.toLowerCase()))

  const curDevice = computed(() => {
    if (isMobile.value) {
      // 移动端
      if (isWechat.value) {
        // 微信
        return 'wx'
      } else {
        // 其它
        return 'other'
      }
    } else {
      // PC 端
      return 'pc'
    }
  })

  return {
    curDevice,
    isMobile,
    isWechat,
    isIOS
  }
}
