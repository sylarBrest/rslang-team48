import { EDifficulty } from '@constants';

const cardHoverHandler = () => {
  const cards = [...document.querySelectorAll<HTMLElement>('.card')];
  cards.forEach((card) => {
    const cardButtons = <HTMLElement>card.querySelector('.card__buttons');
    const downArrow = <HTMLElement>card.querySelector('.card__down-arrow');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let cursorOnButtons = false;

    cardButtons.addEventListener('mouseover', () => {
      cursorOnButtons = true;
    });
    cardButtons.addEventListener('mouseleave', () => {
      cursorOnButtons = false;
    });

    card.addEventListener('mouseover', (e) => {
      const target = <HTMLDivElement>e.target;
      if (!target.classList.contains('card__btn') && !target.classList.contains('card__active')
      ) {
        cardButtons.classList.toggle('card__buttons_active', true);
        downArrow.classList.toggle('card__down-arrow_hover', true);
      }
    });

    card.addEventListener('mouseleave', (e) => {
      const difficulty = Boolean(
        card.getAttribute('data-difficulty') && card.getAttribute('data-difficulty') !== EDifficulty.UNSET,
      );
      downArrow.classList.toggle('card__down-arrow_hover', false);
      const target = <HTMLDivElement>e.target;
      // console.log(cardButtonsActive);
      if (!target.classList.contains('card__btn')
        && !target.classList.contains('card__active')
        && !cursorOnButtons
        && !difficulty
      ) {
        cardButtons.classList.toggle('card__buttons_active', false);
      }
    });
  });
};

export default cardHoverHandler;
