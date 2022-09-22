export interface SwiperOptions {
  basePage?: number,
  switchDelay?: number;
  on?: {
    slideChange?: (newIndex: number, oldIndex: number) => void;
  }
}