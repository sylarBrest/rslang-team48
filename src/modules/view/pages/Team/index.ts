import './style.scss';

const renderTeam = () => `
  <section class="container section">
    <div class="team__header">
      <h2>Наша команда</h2>
    </div>
    <div class="team__body">      
      <div class="team-card">        
        <h3 class="team-card__heading">
          Aliaksandr Astrouski
          <span class="team-card__contacts">
            <a href="https://github.com/sylarBrest"><span class="contact contact_gh"></span></a>
            <a href="https://t.me/sylarBrest"><span class="contact contact_tg"></span></a>
          </span>
        </h3>
        <div class="team-card__image team-card__image_aliaksandr"></div>
        <div class="team-card__badges">
          <div class="team-card__badge">Конфигурация</div>
          <div class="team-card__badge">Роутинг</div>
          <div class="team-card__badge">Аутентификация</div>
          <div class="team-card__badge">Учебник</div>
          <div class="team-card__badge">Пагинация</div>
          <div class="team-card__badge">Статистика</div>
        </div>
        <p class="team-card__info">
          На велосипеде уедешь далеко, а с JavaScript - ещё дальше! 
          В проекте отвечал за роутинг приложения, участвовал в разработке учебника, 
          статистики, аутентификации.
        </p>        
      </div>
      <div class="team-card">        
        <h3 class="team-card__heading">
          Ivan Koliada
          <span class="team-card__contacts">
            <a href="https://github.com/ivanKoliada"><span class="contact contact_gh"></span></a>
            <a href="https://t.me/just_grace"><span class="contact contact_tg"></span></a>
          </span>
        </h3>
        <div class="team-card__image team-card__image_ivan"></div>
        <div class="team-card__badges">
          <div class="team-card__badge">Спринт</div>
          <div class="team-card__badge">Аудиовызов</div>
          <div class="team-card__badge">Авторизация</div>
          <div class="team-card__badge">Учебник</div>
          <div class="team-card__badge">Статистика</div>
          <div class="team-card__badge">Бэкенд</div>
        </div>        
        <p class="team-card__info">
          Искал возможность путешествовать и работать удаленно — нашел себя в разработке. 
          В проекте занимался разработкой мини-игр спринт и аудиовызов, 
          участвовал в разработке статистики, авторизации, подготовке для работы с сервером.
        </p>        
      </div>
      <div class="team-card">
        <h3 class="team-card__heading">Igor Shaymukhametov
          <span class="team-card__contacts">
            <a href="https://github.com/knyazigor"><span class="contact contact_gh"></span></a>
            <a href="https://t.me/knyazigor"><span class="contact contact_tg"></span></a>
          </span>
        </h3>        
        <div class="team-card__image team-card__image_igor"></div>
        <div class="team-card__badges">
          <div class="team-card__badge">Дизайн</div>
          <div class="team-card__badge">Главная</div>
          <div class="team-card__badge">Учебник</div>
          <div class="team-card__badge">Окно авторизации</div>
          <div class="team-card__badge">Меню</div>
          <div class="team-card__badge">О команде</div>
        </div>
        <p class="team-card__info">
          Пользуясь случаем, хочу признаться в любви своей семье, Футураме и фронтенду. 
          В проекте я отвечал за дизайн и ux/ui.
        </p>
      </div>
    </div>      
  </section>
`;

export default renderTeam;
