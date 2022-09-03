/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
interface IntersectionObserverOptions {
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number | number[];
}

function addObserver(el: HTMLElement, className: string, options?: IntersectionObserverOptions) {
  if (!('IntersectionObserver' in window)) {
    el.classList.toggle(className, true);
    return;
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle(className, true);
      } else {
        entry.target.classList.toggle(className, false);
      }
    });
  }, options);
  observer.observe(el);
}

function scrollTrigger(selector: string, className: string, options?: IntersectionObserverOptions) {
  const els = [...document.querySelectorAll<HTMLElement>(selector)];
  els.forEach((el) => {
    addObserver(el, className, options);
  });
}

const mainPageScrollHandler = () => {
  const match = window.location.href.match(/#(.*)$/);
  const fragment = match ? match[1] : '';
  if (!fragment || fragment === '/home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    scrollTrigger('.hero-section__heading', 'hero-section__heading_active');
    scrollTrigger('.hero-section', 'hero-section_active', { rootMargin: '200px' });
    scrollTrigger('.faq', 'faq_active', { rootMargin: '-100px' });
    scrollTrigger('.faq__block', 'faq__block_active', { rootMargin: '-200px' });
    scrollTrigger('.reviews', 'reviews_active');

    const heroSection = <HTMLElement>document.querySelector('.hero-section');
    const subheadings = [...document.querySelectorAll<HTMLElement>('.hero-section__subheading')];
    const heading = <HTMLElement>document.querySelector('.hero-section__heading');
    const bg = <HTMLElement>document.querySelector('.bg');

    const reviewsSection = <HTMLElement>document.querySelector('.reviews');
    const faqSection = <HTMLElement>document.querySelector('.faq');
    let cursor = 0;
    let prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll', () => {
      const currentScrollPos = window.pageYOffset;
      cursor = Math.floor(window.pageYOffset / (window.innerHeight / 2));
      if (currentScrollPos > 0 && cursor < subheadings.length) {
        heading.style.paddingTop = '2rem';
        heading.style.fontSize = '3rem';
      } else if (cursor < subheadings.length) {
        heading.style.paddingTop = '6rem';
        heading.style.fontSize = '4rem';
      }

      if (subheadings[cursor] && (prevScrollpos < currentScrollPos)) {
        subheadings[cursor].style.opacity = '1';
        subheadings[cursor].style.paddingTop = '0';
      } else if (subheadings[cursor]) {
        subheadings[cursor].style.opacity = '0';
        subheadings[cursor].style.paddingTop = '10rem';
      }

      if (faqSection.classList.contains('faq_active')) {
        heroSection.style.opacity = '0';
        bg.classList.toggle('bg_active', false);
      } else if (!faqSection.classList.contains('faq_active') && !reviewsSection.classList.contains('reviews_active')) {
        heroSection.style.opacity = '1';
        bg.classList.toggle('bg_active', true);
      }

      prevScrollpos = currentScrollPos;
    });
  }
};

export default mainPageScrollHandler;
