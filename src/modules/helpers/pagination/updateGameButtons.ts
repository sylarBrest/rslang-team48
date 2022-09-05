export default () => {
  const knownCards = document.querySelectorAll('[data-difficulty="known"]').length;
  const hardCards = document.querySelectorAll('[data-difficulty="hard"]').length;

  const gameButtons = document.querySelectorAll<HTMLButtonElement>('.btn_game');

  gameButtons.forEach((button) => {
    if (knownCards + hardCards === 20) {
      button.classList.add('disabled');
    } else {
      button.classList.remove('disabled');
    }
  });
};
