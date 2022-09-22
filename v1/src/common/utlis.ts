import { MenuLinks } from './config'

let isHomeActive = false;
let isAboutActive = false;

/**
 * 应用 info 的动画特效
 * @param doc 包裹 info 的 HTMLElement
*/
export const useInfo = (doc: HTMLElement): void => {
  if (!isHomeActive) {
    const name: any = doc.querySelector('.name');
    let delay = 0;
    name.style.display = 'none';

    setTimeout(() => {  // 等待页面切换后再执行
      name.style.display = 'block';
      name.innerHTML = name.textContent
        .replace(/\S/g, "<span>$&</span>")
        .replace(/\s/g, "<span>&nbsp;</span>");


      doc.querySelectorAll('span').forEach((span, index) => {
        delay += 0.2;
        if (index === 4) delay += 0.5;
        span.style.setProperty('--delay', `${delay}s`);
      });
    }, 300);

    name.addEventListener('animationend', (e: any) => {
      if (e.target === doc.querySelector('.name span:last-child')) {
        const info: any = doc.querySelector('.info')
        info.classList.add('active');
      }
    });
    isHomeActive = true;
  }
}

/**
 * 应用进度条动画特效
 * @param doc 包裹进度条的 HTMLElement
*/
export const useProgress = (doc: HTMLElement): void => {
  if (!isAboutActive) {
    const progressList: any = doc.querySelectorAll('.progress-li');
    let delay = 0;

    progressList.forEach((item: any) => {
      const divDom = item.querySelectorAll('.progerss > div')[0];
      delay += 0.3;
      divDom.classList.add('active');
      divDom.style.setProperty('--delay', `${delay}s`);
    });
    isAboutActive = true;
  }
}

/**
 * 获取当前 url 的 path
*/
export const getPath = (): string => {
  return location.href.replace(/http[s]{0,1}:\/\/\S+?\//g, "");
}

/**
 * 根据 url 获取页面 index
 * @param url 需要解析的 url 地址
*/
export const getPageIndex = (url: string): number => {
  const path = url.replace(/http[s]{0,1}:\/\/\S+?\//g, "");
  const index = MenuLinks.findIndex((link) => {
    return link.url === path;
  });
  return index;
};
