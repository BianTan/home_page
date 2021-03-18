export interface SwiperOptions {
  basePage?: number,
  on?: {
    slideChange?: (newIndex: number, oldIndex: number) => void;
  }
}