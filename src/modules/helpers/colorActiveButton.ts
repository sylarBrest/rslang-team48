import { wordsDataLocal } from '@store';

const colorActiveButton = () => {
  const pageButtons = <HTMLCollectionOf<HTMLButtonElement>>document.getElementsByClassName('page');
  Array.from(pageButtons).forEach((button) => {
    if (button.dataset.page === wordsDataLocal.page) {
      button.classList.add('active');
    }
  });
};

export default colorActiveButton;
