const mainPageScrollHandler = () => {
  const match = window.location.href.match(/#(.*)$/);
  const fragment = match ? match[1] : '';
  if (!fragment || fragment === '/home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    const heroSection = <HTMLElement>document.querySelector('.hero-section');
    const subheadings = [...document.querySelectorAll<HTMLElement>('.hero-section__subheading')];
    const heading = <HTMLElement>document.querySelector('.hero-section__heading');
    const reviewsCards = [...document.querySelectorAll<HTMLElement>('.review-card')];
    const reviewsSection = <HTMLElement>document.querySelector('.reviews');
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

      let curCard: number | null = null;

      if (cursor > subheadings.length) {
        heroSection.classList.toggle('disappear', true);
        curCard = cursor - subheadings.length - 1;
        if (curCard >= reviewsCards.length) curCard = reviewsCards.length - 1;
      } else if (heroSection.classList.contains('disappear')) {
        heroSection.classList.toggle('disappear', false);
      }

      console.log({ curCard, cursor });

      if (curCard !== null) {
        reviewsSection.style.opacity = '1';
        reviewsCards[curCard].classList.toggle('card-reveal', true);
      }

      prevScrollpos = currentScrollPos;
    });
  }
};

export default mainPageScrollHandler;
