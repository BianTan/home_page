import { SwiperOptions } from './typing'
class BdSwiper {
  containerElement: HTMLElement | null;
  wrapperElement: HTMLElement | null;
  switchDelay: number;
  swiperNum: number;
  currentIndex: number;
  options: SwiperOptions;
  wrapperWidth: number;

  constructor(el: HTMLElement, options: SwiperOptions) {
    const { basePage = 0, switchDelay = 600 } = options
    this.switchDelay = switchDelay
    this.options = options
    this.currentIndex = basePage;
    this.containerElement = el;
    this.wrapperElement = this.containerElement.querySelector('.swiper-wrapper');
    this.swiperNum = this.containerElement.querySelectorAll('.swiper-slide').length;
    this.wrapperWidth = 0

    this.init();  // 初始化
  }

  init(): void {  // 初始化
    if (this.wrapperElement) {
      this.wrapperWidth = this.wrapperElement.clientWidth;
      this.wrapperElement.style.transform = `translate3d(-${this.currentIndex * this.wrapperWidth}px, 0, 0)`;
      this.bindEvent();
    }
  }

  bindEvent(): void { // 绑定
    window.addEventListener("resize", this.handleWindowResize.bind(this), false); // 窗口大小调整
  }

  /**
   * 窗口大小调整
  */
  handleWindowResize(): void {
    if (this.wrapperElement) {
      this.wrapperWidth = this.wrapperElement.clientWidth;
      this.wrapperElement.style.transform = `translate3d(-${this.currentIndex * this.wrapperWidth}px, 0, 0)`; // 重新计算
    }
  }

  /**
   * 指定页面，设置页面到到第N页
   * @param index 需要转跳页面的index
  */
  goPage(index: number): void {
    if (this.wrapperElement) {

      setTimeout(() => {  // 延时设置 transitionDuration 为0
        if (this.wrapperElement) this.wrapperElement.style.transitionDuration = '0s'
      }, this.switchDelay)

      const oldIndex = this.currentIndex  // 保存旧index
      this.currentIndex = index;  // 设置新index
      this.wrapperElement.style.transitionDuration = `${this.switchDelay}ms`  // 设置动画时长
      this.wrapperElement.style.transform = `translate3d(-${index * this.wrapperWidth}px, 0, 0)`; 
      const { on } = this.options
      if (on && on.slideChange) { // 回调
        on.slideChange.call(this, index, oldIndex);
      }
    }
  }

  /**
   * 上一页
  */
  prev(): void {
    if (this.currentIndex > 0) this.goPage(this.currentIndex - 1);
  }

  /**
   * 下一页
  */
  next(): void {
    if (this.currentIndex < this.swiperNum - 1) this.goPage(this.currentIndex + 1);
  }
}

export default BdSwiper;