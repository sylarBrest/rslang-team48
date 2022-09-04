import './style.scss';

const renderModal = () => `  
<div class="modal">
<div class="modal__content">
  <div class="modal__header">
    <div class="modal__tabs">
      <button class="btn_tab btn_sign-in btn_tab_active">Вход</button>
      <button class="btn_tab btn_sign-up">Регистрация</button>
    </div>
    <button class="modal__close-btn">
     <div class="cross"></div>
    </button>
  </div>
  <div class="modal__body">
    <div class="modal__view">            
      <div class="modal__row modal__row_email">
        <input
          class="modal__input"
          type="email"
          id="reg-email"
          pattern="^([^ ]+@[^ ]+\\.[a-z]{2,6}|)$"
          required
          placeholder="E-mail"
        />              
      </div>
      <div class="modal__row modal__row_name">
        <input 
          class="modal__input"
          type="name" 
          id="reg-name" 
          pattern="^[a-zA-Z]{3,15}$" 
          required 
          placeholder="Имя" />
      </div>
      <div class="modal__row modal__row_password">
        <input
          class="modal__input"
          type="password"
          id="reg-password"
          pattern="^\\S{8,}$"
          title="Пароль должен содержать минимум 8 символов"
          required
          placeholder="Пароль"
        />
      </div>
      <button class="btn btn-darken btn-registration">Зарегистрироваться</button>
    </div>
    <div class="modal__view modal__view_active">
      <div class="modal__row modal__row_email">
        <input
          class="modal__input"
          type="email"
          id="log-email"
          pattern="^([^ ]+@[^ ]+\\.[a-z]{2,6}|)$"
          required
          placeholder="E-mail"
        />
      </div>            
      <div class="modal__row modal__row_password">
        <input
          class="modal__input"
          type="password"
          id="log-password"
          pattern="^\\S{8,}$"
          title="Пароль должен содержать минимум 8 символов"
          required
          placeholder="Пароль"
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
