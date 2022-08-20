const dropdownHandler = () => {
  const dropDownBtn = document.querySelector<HTMLElement>('.menu__link_games');
  const dropDownContent = document.querySelector<HTMLElement>('.menu__dropdown-content');
  dropDownBtn?.addEventListener('click', () => {
    dropDownBtn?.classList.toggle('menu__link_games-active');
    dropDownContent?.classList.toggle('menu__dropdown-content_active');
  });
};

export default dropdownHandler;
