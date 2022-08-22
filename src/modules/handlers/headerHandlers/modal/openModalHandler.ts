const openModalHandler = () => {
  const openModalBtn = <HTMLButtonElement>document.querySelector('.menu__login-btn');

  openModalBtn.addEventListener('click', () => {
    const modal = <HTMLElement>document.querySelector('.modal');
    modal.classList.add('modal-show');
  });
};

export default openModalHandler;
