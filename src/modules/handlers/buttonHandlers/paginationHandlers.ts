import { ZERO } from '@constants';
import { colorActiveButton, getMinimalPageNumber, reDrawPageButtons } from '@helpers';
import { updateWordsData, wordsDataLocal } from '@store';
import { increaseStringNumberByStep } from '@utils';
import { renderTextbookBody } from '@view/pages/Textbook';
import initCardHandlers from '../cardHandlers';

const initPaginationHandlers = () => {
  const paginationButtons = <HTMLElement>document.querySelector('.textbook__pagination');
  const textbookBody = <HTMLElement>document.querySelector('.textbook__body');

  paginationButtons.addEventListener('click', async (event: Event) => {
    const targetButton = <HTMLButtonElement>event.target;
    const targetButtonClassList = targetButton.classList;

    switch (true) {
      case targetButtonClassList.contains('page'): {
        const targetPage = targetButton.dataset.page || ZERO;
        wordsDataLocal.page = targetPage;
        break;
      }

      case targetButtonClassList.contains('next'): {
        const min = getMinimalPageNumber() || wordsDataLocal.page;
        console.log(min);
        const newMin = increaseStringNumberByStep(min, 5);
        wordsDataLocal.page = newMin;
        break;
      }

      default:
        break;
    }

    updateWordsData(wordsDataLocal.group, wordsDataLocal.page);
    reDrawPageButtons();
    colorActiveButton();
    textbookBody.innerHTML = await renderTextbookBody(wordsDataLocal.group, wordsDataLocal.page);
    initCardHandlers();
  });
};

export default initPaginationHandlers;
