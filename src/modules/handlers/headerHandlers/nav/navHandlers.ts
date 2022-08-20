
const navHandlers = () => {
  const navbarMenu = <HTMLDivElement>document.querySelector('#menu');
  const burgerMenu = <HTMLDivElement>document.querySelector('#burger');
  const dropDownBtn = <HTMLElement>document.querySelector('.menu__link_games');
  const dropDownContent = <HTMLElement>document.querySelector('.menu__dropdown-content');

  if (burgerMenu && navbarMenu) {
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('burger_active');
      navbarMenu.classList.toggle('menu_active');
    });
  }

  document.querySelectorAll('.menu__link').forEach((link) => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('burger_active');
      navbarMenu.classList.remove('menu_active');
      if (!link.classList.contains('menu__link_games')) {
        dropDownContent.classList.remove('menu__dropdown-content_active');
        dropDownBtn.classList.remove('menu__link_games-active');
      }
    });
  });

  dropDownBtn?.addEventListener('click', () => {
    dropDownBtn?.classList.toggle('menu__link_games-active');
    dropDownContent?.classList.toggle('menu__dropdown-content_active');
  });
};

export default navHandlers;
