import './style.scss';

const renderHome = () => `
  <div class="scroll-area">
    <section class="hero-section fixed">
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
    </section>
    
  </div>
`;

export default renderHome;
