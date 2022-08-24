import renderTutorial from '@view/pages/Tutorial';

const initLevelHandlers = () => {
  const levelButtons = <HTMLElement>document.querySelector('.tutorial__difficulties-bar');
  const main = <HTMLElement>document.querySelector('.main');

  levelButtons.addEventListener('click', async (event: Event) => {
    const targetButton = <HTMLButtonElement>event.target;
    console.log(targetButton.dataset.group);
    main.innerHTML = await renderTutorial(targetButton.dataset.group || '0', '0');
  });
};

export default initLevelHandlers;
