const escapeModalHandler = () => {
  const modal = <HTMLElement>document.querySelector('.modal');

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.remove('modal-show');
    }
  });
};

export default escapeModalHandler;
