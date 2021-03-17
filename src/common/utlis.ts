let isHomeActive = false;
let isAboutActive = false;

export const useInfo = (doc: HTMLElement): void => {
  if (!isHomeActive) {
    const name: any = doc.querySelector('.name');
    let delay = 0;

    name.innerHTML = name.textContent
      .replace(/\S/g, "<span>$&</span>")
      .replace(/\s/g, "<span>&nbsp;</span>");

    doc.querySelectorAll('span').forEach((span, index) => {
      delay += 0.2;

      if (index === 4) delay += 0.5;

      span.style.setProperty('--delay', `${delay}s`);
    });

    name.addEventListener('animationend', (e: any) => {
      if (e.target === doc.querySelector('.name span:last-child')) {
        const info: any = doc.querySelector('.info')
        info.classList.add('active');
      }
    });
    isHomeActive = true;
  }
}

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

export const getPath = (): string => {
  return location.href.replace(/http:\/\/\S+?\//g, "");
}
