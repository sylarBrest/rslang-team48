import { NAVBAR_HEIGHT } from '@constants';

const textbookHeaderHandler = () => {
  let prevScrollpos = window.pageYOffset;
  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    const header = <HTMLElement>document.querySelector('.textbook__header');
    console.log(header.offsetHeight);
    if (prevScrollpos > currentScrollPos) {
      header.style.top = NAVBAR_HEIGHT;
    } else {
      header.style.top = `${-header.offsetHeight}px`;
    }

    prevScrollpos = currentScrollPos;
  });
};

export default textbookHeaderHandler;
