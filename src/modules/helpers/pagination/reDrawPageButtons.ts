import { wordsDataLocal } from '@store';
import { increaseStringNumberByStep } from '@utils';

const reDrawPageButtons = () => {
  const pageButtons = <HTMLCollectionOf<HTMLButtonElement>>document.getElementsByClassName('page');

  Array.from(pageButtons).forEach((button, index) => {
    const temp = button;
    if (+wordsDataLocal.page < 2) {
      temp.dataset.page = `${index}`;
      temp.textContent = `${index + 1}`;
    } else if (+wordsDataLocal.page > 27) {
      temp.dataset.page = `${25 + index}`;
      temp.textContent = `${25 + index + 1}`;
    } else {
      const pageNumber = increaseStringNumberByStep(wordsDataLocal.page, index - 2);
      temp.dataset.page = pageNumber;
      temp.textContent = increaseStringNumberByStep(pageNumber, 1);
    }
  });

  const pagination = <HTMLDivElement>document.querySelector('.textbook__pagination');
  pagination.hidden = +wordsDataLocal.group === 6;
};

export default reDrawPageButtons;
