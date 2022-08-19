const escapeModalHandler = () => {
  const modal = <HTMLElement>document.querySelector('.modal');

  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.remove('modal-show');
    }
  });
};

export default escapeModalHandler;
