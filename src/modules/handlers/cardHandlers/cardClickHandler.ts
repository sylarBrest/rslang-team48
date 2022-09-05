import { CARDS_ON_PAGE_COUNT, CARDS_COL_GAP } from '@constants';

const cardClickHandler = () => {
  const cards = [...document.querySelectorAll<HTMLElement>('.card')];

  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      const target = <HTMLDivElement>e.target;

      if (!target.classList.contains('card__btn')) {
        card.classList.toggle('card_active');

        const cardHeader = <HTMLElement>card.querySelector('.card__header');
        cardHeader.classList.toggle('card__header_active');
        const cardBody = <HTMLElement>card.querySelector('.card__body');
        cardBody.classList.toggle('card__body_active');
        if (!card.classList.contains('card_buttons_active')) card.classList.add('card_buttons_active');

        const cardBodyActive = cardBody.classList.contains('card__body_active');

        const cardWidth = document.querySelector<HTMLElement>('.card')?.offsetWidth || 1;
        const containerWidth = document.querySelector<HTMLElement>('.textbook__body')?.offsetWidth || 1;
        const cols = Math.floor((containerWidth / (cardWidth + CARDS_COL_GAP)));
        const index = +(card.dataset.index || 0);
        const bottomRows = Math.floor((CARDS_ON_PAGE_COUNT - index) / cols);
        const textbookFooter = <HTMLElement>document.querySelector('.footer');

        const cardsArr = cards
          .reduce((acc, el, i) => {
            const ch = Math.floor(i / cols);
            // eslint-disable-next-line no-param-reassign
            acc[ch] = [...acc[ch] || [],
              el.querySelector<HTMLElement>('.card__body_active')?.offsetHeight || 0];
            return acc;
          }, [] as number[][]);
        const resultArr = [];
        for (let x = 0; x < cols; x += 1) {
          resultArr.push(cardsArr.reduce((acc, el) => acc + el[x], 0));
        }

        const footerOffset = Math.max(...resultArr);

        if (cardBodyActive) {
          cardBody.style.transform = `translateY(calc(${(cardHeader.offsetHeight)}px))`;
          textbookFooter.style.transform = `translateY(${footerOffset}px)`;
        } else {
          cardBody.style.transform = 'translateY(0)';
          textbookFooter.style.transform = `translateY(${footerOffset}px)`;
        }

        new Array(bottomRows)
          .fill(null)
          .forEach((el, i) => {
            const dataIndex = index + ((i + 1) * cols);
            const element = <HTMLElement>document.querySelector(`[data-index="${dataIndex}"]`);
            const curVal = (element?.style.transform.match(/\d+/gm) || [0])[0];
            if (element && cardBodyActive) {
              element.style.transform = `translateY(${+curVal + cardBody.offsetHeight}px)`;
            } else if (element) {
              element.style.transform = `translateY(${+curVal - cardBody.offsetHeight}px)`;
            }
          });
      }
    });
  });
};

export default cardClickHandler;
