import './style.scss';

const renderTeam = () => `
  <section class="container section">
    <div class="team__header">
      <h2>О команде</h2>
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
        <div class="team-card__badges"></div>
        <p class="team-card__info"></p>        
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
          Искал возможность путешествовать и работать удаленно - нашел себя в разработке.
          В проекте занимался разработкой игры спринт, игры аудиовызов, участие в разработке 
          статистики, авторизации, подготовка для работы с сервером
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
          <div class="team-card__badge">Главная</div>
          <div class="team-card__badge">Учебник</div>
          <div class="team-card__badge">Окно авторизации</div>
          <div class="team-card__badge">Меню</div>
          <div class="team-card__badge">О команде</div>
        </div>
        <p class="team-card__info">
          Пользуясь случаем, хочу признаться в любви своей семье, Футураме и фронтенду. 
          В проекте я отвечал за стили и ux/ui.
        </p>
      </div>
    </div>      
  </section>
`;

export default renderTeam;
