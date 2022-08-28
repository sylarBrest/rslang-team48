import { SCROLL_DISTANCE } from '@constants';
import setFooterMargin from '@handlers/cardHandlers/setFooterMargin';

const initWindowHandlers = () => {
  window.addEventListener('scroll', () => {
    const header = document.querySelector<HTMLElement>('.header');

    if (window.scrollY >= SCROLL_DISTANCE) {
      header?.classList.add('on-scroll');
    } else {
      header?.classList.remove('on-scroll');
    }
  });
  window.addEventListener('resize', () => setFooterMargin());
};

export default initWindowHandlers;
