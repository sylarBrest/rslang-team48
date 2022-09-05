import { DEFAULT_FILTER, WORDS_PER_PAGE, ZERO } from '@constants';
import {
  colorActiveButton, reDrawPageButtons, updatePaginationButtonsState, validatePageNumber,
  updateTextbookStatistics,
} from '@helpers';
import { updateWordsData, userDataLocal, wordsDataLocal } from '@store';
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
        wordsDataLocal.page = increaseStringNumberByStep(wordsDataLocal.page, 5);
        break;
      }

      case targetButtonClassList.contains('last'): {
        wordsDataLocal.page = '29';
        break;
      }

      case targetButtonClassList.contains('prev'): {
        wordsDataLocal.page = increaseStringNumberByStep(wordsDataLocal.page, -5);
        break;
      }

      case targetButtonClassList.contains('first'): {
        wordsDataLocal.page = ZERO;
        break;
      }

      default:
        break;
    }

    validatePageNumber();
    updateWordsData(wordsDataLocal.group, wordsDataLocal.page);
    if (userDataLocal) {
      await updateTextbookStatistics();
    }

    reDrawPageButtons();
    colorActiveButton();
    updatePaginationButtonsState();
    const queries = {
      group: wordsDataLocal.group,
      page: wordsDataLocal.page,
      wordsPerPage: WORDS_PER_PAGE,
      filter: DEFAULT_FILTER,
    };
    textbookBody.innerHTML = userDataLocal
      ? await renderTextbookBody(queries)
      : await renderTextbookBody(wordsDataLocal.group, wordsDataLocal.page);
    initCardHandlers();
  });
};

export default initPaginationHandlers;
