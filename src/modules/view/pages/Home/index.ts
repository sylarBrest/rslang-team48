import './style.scss';

const renderHome = () => `
    <div class="bg bg_active"></div>
    <section class="hero-section">
      <div class="hero-section__row">
        <div class="hero-section__col">
          <div class="hero-section__heading-container">
            <h1 class="hero-section__heading">Учи английский</h1>      
          </div>
          <div class="hero-section__subheadings-container">
            <h2 class="hero-section__subheading">самостоятельно</h2>
            <h2 class="hero-section__subheading">бесплатно</h2>
            <h2 class="hero-section__subheading">4000 слов</h2>
            <h2 class="hero-section__subheading">одно приложение</h2>
            <h2 class="hero-section__subheading">уникальные игры</h2>
            <h2 class="hero-section__subheading">статистика</h2>
            <h2 class="hero-section__subheading">довольные студенты*</h2>
            <h2 class="hero-section__subheading hero-section__subheading_last">
              *среди друзей и родственников команды
            </h2>
          </div>
        </div>
        <div class="hero-section__col splash-image">
        </div>
      </div>      
    </section>
    <section class="faq">
      <div class="faq__col">
        <div class="faq__block">
          <h3 class="faq__question">Где я нахожусь?</h3>
          <p class="faq__answer">
            Это веб-приложение, где можно изучать английские слова при помощи интерактивного 
            <a href="/#/textbook/">учебника</a> и мини-игр.
          </p>
        </div>
        <div class="faq__block">
        <h3 class="faq__question">А поподробнее?</h3>
        <p class="faq__answer">
          В нашем приложении есть 3600 часто употребляемых английских слов. 
          Первые 400 наиболее часто употребляемых слов в коллекцию не вошли. 
          Считается, что это базовый запас взрослого человека, оставшийся от предыдущих попыток изучения языка. 
          Вся коллекция разбита на шесть разделов, в каждом разделе 30 страниц, на каждой странице 20 слов для изучения.
        </p>
        </div>
        <div class="faq__block">
          <h3 class="faq__question">А что про мини-игры?</h3>
          <p class="faq__answer">
            Их две: <a href="/#/games/audiocall">аудиовызов</a> 
            и <a href="/#/games/sprint">спринт</a>. Чем объяснять их суть, лучше один раз попробовать поиграть. 
            Да, игры можно запукать
            в двух режимах: из меню и со страницы учебника. Если игра запущена из меню, то в ней можно выбрать уровень 
            сложности которые отличаются тем, слова какого из шести раздлов 
            коллекции исходных данных в ней задействованы.
            В другом случае в ней используются слова из той страницы учебника, на которой размещена ссылка на игру. 
            Если размещённых на странице слов для игры недостаточно, задействуются слова с предыдущих страниц. 
            Если предыдущих страниц нет или недостаточно, 
            игра завершается досрочно, когда закончатся все доступные слова
          </p>
        </div>
        <div class="faq__block">
          <h3 class="faq__question">Я могу отслеживать прогресс?</h3>
          <p class="faq__answer">
            Каждое слово в учебнике может быть отмечено как изученное и/или сложное. 
            Но для этого нужно авторизоваться. А
            еще свой прогресс можно оценить в разделе <a href="/#/statistic">статистика</a>.
          </p>
        </div
      </div>
      </div>
    </section class=faq">

    <section class="reviews">
      <div class="reviews__row">
        <h2 class="reviews__heading">Наши отзывы</h2>
      </div>
      <div class="reviews__row">
        <div class="review-card" id="card-1">
          <div class="review-card__userpic review-card__userpic_drogo"></div>
          <p class="review-card__text">
            В дотракийском нет слова спасибо, но благодаря разработчикам этого приложения я могу сказать thanks
          </p>
          <p class="review-card__username">Кхал Дрого</p>
          <div class="review-card__rating-bar">⭐⭐⭐⭐⭐</div>
        </div>
        <div class="review-card" id="card-2">
          <div class="review-card__userpic review-card__userpic_cicero"></div>
          <p class="review-card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <p class="review-card__username">Марк Тулий Цицерон</p>
          <div class="review-card__rating-bar">⭐⭐⭐⭐⭐</div>
        </div>
        <div class="review-card" id="card-3">
          <div class="review-card__userpic review-card__userpic_student"></div>
          <p class="review-card__text">
            Я не узнал ни одного нового ругательства, поэтому только 4
          </p>
          <p class="review-card__username"/>Студент Один</p>
          <div class="review-card__rating-bar">⭐⭐⭐⭐</div>
        </div>
        </div>
      </div>      
    </section>    
`;

export default renderHome;
