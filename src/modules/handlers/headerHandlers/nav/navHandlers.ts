const navHandlers = () => {
  const navbarMenu = <HTMLDivElement>document.querySelector('#menu');
  const burgerMenu = <HTMLDivElement>document.querySelector('#burger');

  if (burgerMenu && navbarMenu) {
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('burger_active');
      navbarMenu.classList.toggle('menu_active');
    });
  }

  document.querySelectorAll('.menu-link').forEach((link) => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('burger_active');
      navbarMenu.classList.remove('menu_active');
    });
  });
};

export default navHandlers;
