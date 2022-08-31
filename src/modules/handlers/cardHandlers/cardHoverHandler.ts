const cardHoverHandler = () => {
  const cards = [...document.querySelectorAll<HTMLElement>('.card')];
  cards.forEach((card) => {
    const cardButtons = <HTMLElement>card.querySelector('.card__buttons');
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
      }
    });

    card.addEventListener('mouseleave', (e) => {
      const target = <HTMLDivElement>e.target;
      if (!target.classList.contains('card__btn')
        && !target.classList.contains('card__active')
        && !cursorOnButtons
      ) {
        cardButtons.classList.toggle('card__buttons_active', false);
      }
    });
  });
};

export default cardHoverHandler;