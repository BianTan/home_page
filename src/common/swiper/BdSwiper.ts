import { SwiperOptions } from './typing'
class BdSwiper {
  containerDom: HTMLElement | null;
  wrapperDom: HTMLElement | null;
  swiperNum: number;
  currentIndex: number;
  options: SwiperOptions;

  constructor(el: HTMLElement, options: SwiperOptions) {
    const { basePage } = options
    this.options = options
    this.currentIndex = basePage || 0;
    this.containerDom = el;
    this.wrapperDom = this.containerDom.querySelector('.swiper-wrapper');
    this.swiperNum = this.containerDom.querySelectorAll('.swiper-slide').length;

    this.init();  // 初始化
  }

  init(): void {  // 初始化
    if (this.wrapperDom) {
      const w = this.wrapperDom.clientWidth;
      this.wrapperDom.style.transform = `translate3d(-${this.currentIndex * w}px, 0, 0)`;
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
    if (this.wrapperDom) {
      const w = this.wrapperDom.clientWidth;
      this.wrapperDom.style.transform = `translate3d(-${this.currentIndex * w}px, 0, 0)`;
    }
  }

  /**
   * 指定页面，设置页面到到第N页
   * @param index 需要转跳页面的 index
  */
  goPage(index: number): void {
    if (this.wrapperDom) {
      this.wrapperDom.style.transitionDuration = '.6s'
      const currentIndex = this.currentIndex
      this.currentIndex = index;
      const w = this.wrapperDom.clientWidth;
      this.wrapperDom.style.transform = `translate3d(-${index * w}px, 0, 0)`;
      const { on } = this.options
      if (on && on.slideChange) {
        on.slideChange.call(this, index, currentIndex);
      }
      setTimeout(() => {
        if (this.wrapperDom) this.wrapperDom.style.transitionDuration = '0s'
      }, 600)
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