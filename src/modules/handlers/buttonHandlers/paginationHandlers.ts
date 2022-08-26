import { ZERO } from '@constants';
import { updateWordsData, wordsDataLocal } from '@store';
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
        wordsDataLocal.page = (+wordsDataLocal.page + 5).toString();
        break;
      }

      default:
        break;
    }

    updateWordsData(wordsDataLocal.group, wordsDataLocal.page);
    textbookBody.innerHTML = await renderTextbookBody(wordsDataLocal.group, wordsDataLocal.page);
    initCardHandlers();
  });
};

export default initPaginationHandlers;
