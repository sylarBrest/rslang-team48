const changeTabHandler = () => {
  const tabs = document.querySelectorAll('.btn_tab');
  const views = document.querySelectorAll('.modal__view');

  tabs.forEach((el) => {
    el.addEventListener('click', () => {
      tabs.forEach((tab) => tab.classList.toggle('btn_tab_active'));
      views.forEach((view) => view.classList.toggle('modal__view_active'));
    });
  });
};

export default changeTabHandler;
