import renderTextbook from '@view/pages/Textbook';

const initLevelHandlers = () => {
  const levelButtons = <HTMLElement>document.querySelector('.textbook__difficulties-bar');
  const main = <HTMLElement>document.querySelector('.main');

  levelButtons.addEventListener('click', async (event: Event) => {
    const targetButton = <HTMLButtonElement>event.target;
    console.log(targetButton.dataset.group);
    main.innerHTML = await renderTextbook(targetButton.dataset.group || '0', '0');
  });
};

export default initLevelHandlers;
