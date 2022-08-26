import { ZERO } from '@constants';
import { increaseStringNumberByStep } from '@utils';

const reDrawPageButtons = () => {
  const pageButtons = <HTMLCollectionOf<HTMLButtonElement>>document.getElementsByClassName('page');

  Array.from(pageButtons).forEach((button) => {
    const temp = button;
    const pageNumber = button.dataset.page || ZERO;
    const newPageNumber = increaseStringNumberByStep(pageNumber, 5);
    temp.dataset.page = newPageNumber;
    temp.textContent = newPageNumber;
  });
};

export default reDrawPageButtons;
