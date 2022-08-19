/* eslint-disable @typescript-eslint/no-unused-vars */
import './style.scss';

type Props = {
  target: HTMLElement,
  changeView: (e: Event) => void,
};

function Menu({ target, changeView }: Props) {
  const navbar = <HTMLDivElement>document.createElement('nav');
  navbar.classList.add('navbar', 'container');
  navbar.innerHTML = `    
      <a href="./index.html" class="logo"></a>
      <div class="burger" id="burger">
        <span class="burger__line"></span>
        <span class="burger__line"></span>
        <span class="burger__line"></span>
      </div>
      <div class="menu" id="menu">
        <ul class="menu__inner">
            <li class="menu__item" data-view="main"><a href="#" class="menu__link menu__link_main">Главная</a></li>
            <li class="menu__item" data-view="tutorial"><a href="#" class="menu__link menu__link_tutorial menu__link_active">Учебник</a></li>
            <li class="menu__item" data-view="games"><a href="#" class="menu__link menu__link_games">Игры</a></li>
            <li class="menu__item" data-view="stat"><a href="#" class="menu__link menu__link_stat">Статистика</a></li>
        </ul>
      </div>
      <button class="menu__login-btn">Войти</button>    
  `;

  [...navbar.querySelectorAll('.menu__item')]
    .map((el) => el.addEventListener('click', changeView));
  // navbar.querySelector('menu__login-btn')?.addEventListener('click', openModal);

  const navbarMenu = <HTMLDivElement>navbar.querySelector('#menu');
  const burgerMenu = <HTMLDivElement>navbar.querySelector('#burger');

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

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 85) {
      target.classList.add('on-scroll');
    } else {
      target.classList.remove('on-scroll');
    }
  });

  target.appendChild(navbar);
}

export default Menu;
