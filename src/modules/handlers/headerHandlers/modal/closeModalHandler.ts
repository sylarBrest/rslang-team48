const closeModalHandler = () => {
  const closeModalBtn = <HTMLButtonElement>document.querySelector('.modal__close-btn');

  closeModalBtn.addEventListener('click', () => {
    const modal = <HTMLElement>document.querySelector('.modal');
    modal.classList.remove('modal-show');
  });
};

export default closeModalHandler;
