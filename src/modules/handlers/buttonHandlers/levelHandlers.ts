import { DEFAULT_FILTER, WORDS_PER_PAGE, ZERO } from '@constants';
import { colorActiveButton, reDrawPageButtons, updateTextbookStatistics } from '@helpers';
import { updateWordsData, userDataLocal, wordsDataLocal } from '@store';
import { renderTextbookBody } from '@view/pages/Textbook';
import initCardHandlers from '../cardHandlers';

const initLevelHandlers = () => {
  const levelButtons = document.querySelectorAll<HTMLElement>('.radio-container');
  const textbookBody = <HTMLElement>document.querySelector('.textbook__body');

  levelButtons.forEach((el) =>
    el.addEventListener('click', async (event: Event) => {
      const targetButton = <HTMLButtonElement>event.currentTarget;
      (<HTMLInputElement>targetButton.querySelector('input')).checked = true;
      wordsDataLocal.group = targetButton.dataset.group || ZERO;
      wordsDataLocal.page = ZERO;
      updateWordsData(wordsDataLocal.group, wordsDataLocal.page);
      await updateTextbookStatistics();
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
      reDrawPageButtons();
      colorActiveButton();
    }));
};

export default initLevelHandlers;
