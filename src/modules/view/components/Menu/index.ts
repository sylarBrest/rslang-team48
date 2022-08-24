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
            <li class="menu__item" data-view="home">
              <a href="/#/" class="menu__link menu__link_home menu__link_active">Главная</a>
            </li>
            <li class="menu__item" data-view="tutorial">
              <a href="/#/tutorial/4/3" class="menu__link menu__link_tutorial">Учебник</a>
            </li>
            <li class="menu__item menu__dropdown-item" data-view="games">
              <button class="menu__link menu__link_games">Игры</button>
                <ul class="menu__dropdown-content">
                  <li class="menu__item" data-view="audiocall">
                    <a href="/#/audiocall" class="menu__link menu__link_audiocall">Аудиовызов</a>
                  </li>
                  <li class="menu__item" data-view="sprint">
                    <a href="/#/sprint" class="menu__link menu__link_sprint">Спринт</a>
                  </li>
                </ul>
            </li>
            
            <li class="menu__item" data-view="stat">
              <a href="/#/statistic" class="menu__link menu__link_stat">Статистика</a>
            </li>
            <li class="menu__item" data-view="team">
              <a href="/#/team" class="menu__link menu__link_team">О команде</a>
            </li>
        </ul>
      </div>
      <button class="menu__login-btn">Войти</button>
  </nav>
`;

export default renderMenu;
