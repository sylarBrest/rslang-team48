import { ZERO } from '@constants';
import { colorActiveButton, reDrawPageButtons } from '@helpers';
import { updateWordsData, wordsDataLocal } from '@store';
import { renderTextbookBody } from '@view/pages/Textbook';
import initCardHandlers from '../cardHandlers';

const initLevelHandlers = () => {
  const levelButtons = document.querySelectorAll<HTMLElement>('.radio-container');
  const textbookBody = <HTMLElement>document.querySelector('.textbook__body');

  levelButtons.forEach((el) => el.addEventListener('click', async (event: Event) => {
    const targetButton = <HTMLButtonElement>event.currentTarget;
    wordsDataLocal.group = targetButton.dataset.group || ZERO;
    wordsDataLocal.page = ZERO;
    updateWordsData(wordsDataLocal.group, wordsDataLocal.page);
    textbookBody.innerHTML = await renderTextbookBody(wordsDataLocal.group, wordsDataLocal.page);
    initCardHandlers();
    reDrawPageButtons();
    colorActiveButton();
  }));
};

export default initLevelHandlers;
