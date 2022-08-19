import './style.scss';

const renderMenu = () => `
  <nav class="navbar container">
    <a href="./index.html" class="logo"></a>
      <div class="burger" id="burger">
        <span class="burger__line"></span>
        <span class="burger__line"></span>
        <span class="burger__line"></span>
      </div>
      <div class="menu" id="menu">
        <ul class="menu__inner">
            <li class="menu__item" data-view="main">
              <a href="/#/" class="menu__link menu__link_main menu__link_active">Главная</a>
            </li>
            <li class="menu__item" data-view="tutorial">
              <a href="/#/tutorial" class="menu__link menu__link_tutorial">Учебник</a>
            </li>
            <li class="menu__item" data-view="games">
              <a href="/#/games" class="menu__link menu__link_games">Игры</a>
            </li>
            <li class="menu__item" data-view="stat">
              <a href="/#/statistic" class="menu__link menu__link_stat">Статистика</a>
            </li>
        </ul>
      </div>
      <button class="menu__login-btn">Войти</button>
  </nav>
`;

export default renderMenu;
