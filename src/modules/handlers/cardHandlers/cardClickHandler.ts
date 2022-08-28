import { CARDS_ON_PAGE_COUNT } from '@constants';

const cardClickHandler = () => {
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

    card.addEventListener('click', (e) => {
      const target = <HTMLDivElement>e.target;

      if (!target.classList.contains('card__btn')) {
        card.classList.toggle('card_active');

        const cardHeader = <HTMLElement>card.querySelector('.card__header');
        cardHeader.classList.toggle('card__header_active');
        const cardBody = <HTMLElement>card.querySelector('.card__body');
        cardBody.classList.toggle('card__body_active');
        if (!card.classList.contains('card_buttons_active')) card.classList.add('card_buttons_active');

        const cardWidth = document.querySelector<HTMLElement>('.card')?.offsetWidth || 1;
        const containerWidth = document.querySelector<HTMLElement>('.textbook')?.offsetWidth || 1;
        const cols = Math.floor((containerWidth / (cardWidth + 16)));
        const index = +(card.dataset.index || 0);
        const bottomRows = Math.floor((CARDS_ON_PAGE_COUNT - index) / cols);
        // const textbookBody = <HTMLElement>document.querySelector('.textbook__body');
        new Array(bottomRows)
          .fill(null)
          .forEach((el, i) => {
            const dataIndex = index + ((i + 1) * cols);
            const element = <HTMLElement>document.querySelector(`[data-index="${dataIndex}"]`);
            const match = (element?.style.transform.match(/\d+/gm) || [0])[0];
            if (element && cardBody.classList.contains('card__body_active')) {
              element.style.transform = `translateY(${+match + cardBody.offsetHeight}px)`;
            } else if (element) {
              element.style.transform = `translateY(${+match - cardBody.offsetHeight}px)`;
            }
          });

        if (cardBody.classList.contains('card__body_active')) {
          cardBody.style.transform = `translateY(calc(${(cardHeader.offsetHeight)}px))`;
        } else {
          cardBody.style.transform = 'translateY(0)';
        }
      }
    });
  });
};

export default cardClickHandler;
