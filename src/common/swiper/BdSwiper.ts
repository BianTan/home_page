class BdSwiper {
  containerDom: HTMLElement | null;
  wrapperDom: HTMLElement | null;
  swiperNum: number;
  currentIndex: number;
  constructor(ele: HTMLElement) {
    this.currentIndex = 0;
    this.containerDom = ele;
    this.wrapperDom = this.containerDom.querySelector('.swiper-wrapper');
    this.swiperNum = this.containerDom.querySelectorAll('.swiper-slide').length;
  }

  goPage(index: number): void {
    if (this.wrapperDom) {
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