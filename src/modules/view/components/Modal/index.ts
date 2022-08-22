import './style.scss';

const renderModal = () => `  
  <div class="modal">
    <div class="modal__content container">
      <div class="modal__header">
        <h3 class="modal__title">Регистрация</h3>
        <h3 class="modal__title" style="display: none;">Вход</h3>
        <button class="modal__close-btn">X</button>
      </div>
      <div class="modal__body">
        <div class="modal__sign-up">            
          <div class="modal__row">
            <label for="email">Email</label>
            <input
              class="modal__input"
              type="email"
              id="reg-email"
              pattern="^([^ ]+@[^ ]+\\.[a-z]{2,6}|)$"
              required
              placeholder="Введите адрес почты"
            />              
          </div>
          <div class="modal__row">
            <label for="name">Имя</label>
            <input 
              class="modal__input"
              type="name" 
              id="reg-name" 
              pattern="/^[a-z0-9_-]{3,16}$/" 
              required 
              placeholder="Введите имя" />
          </div>
          <div class="modal__row">
            <label for="password">Пароль</label>
            <input
              class="modal__input"
              type="password"
              id="reg-password"
              pattern="^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$"
              required
              placeholder="Введите пароль"
            />
          </div>
          <button class="btn btn-darken btn-registration">Зарегистрироваться</button>
        </div>
        <div class="modal__sign-in">
          <div class="modal__row">
            <label for="email">Email:</label>
            <input
              class="modal__input"
              type="email"
              id="log-email"
              pattern="^([^ ]+@[^ ]+\\.[a-z]{2,6}|)$"
              required
              placeholder="Введите адрес почты"
            />
          </div>            
          <div class="modal__row">
            <label for="password">Пароль:</label>
            <input
              class="modal__input"
              type="password"
              id="log-password"
              pattern="^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$"
              required
              placeholder="Введите пароль"
            />
          </div>            
          <button class="btn btn-darken btn-login">Войти</button>
        </div>
      </div>
      <div class="modal__footer">        
      </div>
    </div>
  </div>    
`;

export default renderModal;
