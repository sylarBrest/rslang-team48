import { wordsDataLocal } from '@store';

const updateButtonState = (className: string): void => {
  const button = <HTMLButtonElement>document.querySelector(`.${className}`);

  switch (className) {
    case 'first':
    case 'prev':
      button.disabled = +wordsDataLocal.page <= 2;
      break;

    case 'next':
    case 'last':
      button.disabled = +wordsDataLocal.page >= 27;
      break;

    default:
      break;
  }
};

export default () => {
  ['first', 'prev', 'next', 'last'].forEach((className) => updateButtonState(className));
};
