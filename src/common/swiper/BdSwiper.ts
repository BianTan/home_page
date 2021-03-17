class BdSwiper {
  containerDom: HTMLElement | null;
  wrapperDom: HTMLElement | null;
  swiperNum: number;
  currentIndex: number;
  isInit: boolean;

  constructor(ele: HTMLElement, index?: number) {
    this.currentIndex = index || 0;
    this.containerDom = ele;
    this.wrapperDom = this.containerDom.querySelector('.swiper-wrapper');
    this.swiperNum = this.containerDom.querySelectorAll('.swiper-slide').length;
    this.isInit = false
    this.init();
  }

  init(): void {
    if (this.wrapperDom) {
      const w = this.wrapperDom.clientWidth;
      this.wrapperDom.style.transform = `translate3d(-${this.currentIndex * w}px, 0, 0)`;
    }
  }

  goPage(index: number): void {
    if (this.wrapperDom) {
      if (!this.isInit) {
        this.isInit = true
        this.wrapperDom.style.transitionDuration = '.6s'
      }
      this.currentIndex = index;
      const w = this.wrapperDom.clientWidth;
      this.wrapperDom.style.transform = `translate3d(-${index * w}px, 0, 0)`;
    }
  }

  resize(): void {
    if (this.wrapperDom) {
      const w = this.wrapperDom.clientWidth;
      this.wrapperDom.style.transform = `translate3d(-${this.currentIndex * w}px, 0, 0)`;
    }
  }
}

export default BdSwiper;