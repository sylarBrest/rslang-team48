const cardClickHandler = () => {
  const cards = [...document.querySelectorAll('.card')];
  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      const target = <HTMLDivElement>e.target;
      if (!target.classList.contains('card__btn')) {
        card.classList.toggle('card_active');
        card.querySelector('.card__header')?.classList.toggle('card__header_active');
        card.querySelector('.card__body')?.classList.toggle('card__body_active');
      }
    });
  });
};

export default cardClickHandler;
