const clickLvlButtonHandler = () => {
  const levelButtons = <HTMLButtonElement>document.querySelector('.game__level-buttons');

  levelButtons.addEventListener('click', (e: Event) => {
    const target = <HTMLButtonElement>e.target;
    const elements = document.querySelectorAll<HTMLButtonElement>('.game__level-button');

    if (target.classList.contains('game__level-button')) {
      elements.forEach((elem) => elem.classList.remove('active-level-btn'));
      target.classList.add('active-level-btn');
    }
  });
};

export default clickLvlButtonHandler;
