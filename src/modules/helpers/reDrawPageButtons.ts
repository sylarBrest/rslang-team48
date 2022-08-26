import { wordsDataLocal } from '@store';
import { increaseStringNumberByStep } from '@utils';

const reDrawPageButtons = () => {
  const pageButtons = <HTMLCollectionOf<HTMLButtonElement>>document.getElementsByClassName('page');

  Array.from(pageButtons).forEach((button, index) => {
    const temp = button;
    const pageNumber = increaseStringNumberByStep(wordsDataLocal.page, index);
    temp.dataset.page = pageNumber;
    temp.textContent = increaseStringNumberByStep(pageNumber, 1);
  });
};

export default reDrawPageButtons;
