/* eslint-disable no-param-reassign */
import { wordsDataLocal } from '@store';

const colorActiveButton = () => {
  const pageButtons = <HTMLCollectionOf<HTMLButtonElement>>document.getElementsByClassName('page');
  Array.from(pageButtons).forEach((button) => {
    button.classList.remove('active');
    if (button.dataset.page === wordsDataLocal.page) {
      button.classList.add('active');
    }
  });
  const levelButtons = <HTMLCollectionOf<HTMLInputElement>>document.getElementsByClassName('radio-btn');
  Array.from(levelButtons).forEach((button) => {
    button.checked = false;
    if (button.value === wordsDataLocal.group) {
      button.checked = true;
    }
  });
};

export default colorActiveButton;
