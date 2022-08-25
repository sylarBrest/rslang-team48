import { ZERO } from '@constants';
import { wordsDataLocal } from '@store';
import { renderTextbookBody } from '@view/pages/Textbook';
import initCardHandlers from '../cardHandlers';

const initLevelHandlers = () => {
  const levelButtons = <HTMLElement>document.querySelector('.textbook__difficulties-bar');
  const textbookBody = <HTMLElement>document.querySelector('.textbook__body');

  levelButtons.addEventListener('click', async (event: Event) => {
    const targetButton = <HTMLButtonElement>event.target;
    wordsDataLocal.group = targetButton.dataset.group || ZERO;
    wordsDataLocal.page = ZERO;
    textbookBody.innerHTML = await renderTextbookBody(wordsDataLocal.group, wordsDataLocal.page);
    initCardHandlers();
  });
};

export default initLevelHandlers;
