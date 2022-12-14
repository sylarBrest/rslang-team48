import {
  ALL_WORDS_ON_SERVER, DEFAULT_FILTER, WORDS_PER_PAGE, ZERO,
} from '@constants';
import {
  colorActiveButton, reDrawPageButtons, updateGameButtons, updateTextbookStatistics,
} from '@helpers';
import { updateWordsData, userDataLocal, wordsDataLocal } from '@store';
import { renderTextbookBody } from '@view/pages/Textbook';
import initCardHandlers from '../cardHandlers';

const initLevelHandlers = () => {
  const levelButtons = document.querySelectorAll<HTMLElement>('.radio-container');
  const textbookBody = <HTMLElement>document.querySelector('.textbook__body');

  levelButtons.forEach((el, index) =>
    el.addEventListener('click', async (event: Event) => {
      const targetButton = <HTMLButtonElement>event.currentTarget;
      (<HTMLInputElement>targetButton.querySelector('input')).checked = true;
      wordsDataLocal.group = targetButton.dataset.group || ZERO;
      wordsDataLocal.page = ZERO;
      updateWordsData(wordsDataLocal.group, wordsDataLocal.page);
      if (userDataLocal) {
        await updateTextbookStatistics();
      }

      const isHardWordsGroup = index === 6;

      const queries = isHardWordsGroup
        ? {
          group: wordsDataLocal.group,
          page: wordsDataLocal.page,
          wordsPerPage: ALL_WORDS_ON_SERVER,
          filter: '{"userWord.difficulty":"hard"}',
        }
        : {
          group: wordsDataLocal.group,
          page: wordsDataLocal.page,
          wordsPerPage: WORDS_PER_PAGE,
          filter: DEFAULT_FILTER,
        };

      textbookBody.innerHTML = userDataLocal
        ? await renderTextbookBody(queries, '', isHardWordsGroup)
        : await renderTextbookBody(wordsDataLocal.group, wordsDataLocal.page);
      initCardHandlers();
      reDrawPageButtons();
      if (+wordsDataLocal.group !== 6) {
        updateGameButtons();
      }

      colorActiveButton();
    }));
};

export default initLevelHandlers;
