import './style.scss';
import { signIn } from '../../../services/logins/signIn';
import { updateLocalStorageData } from '../../../services/userData/updateUserData';
import { createUser } from '../../../services/users/createUser';
import { EStatusCode } from '../../../types';

type Props = {
  target: HTMLElement;
};

function Modal({ target }: Props) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  modal.innerHTML = `
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
  `

// const modal = <HTMLDivElement>document.querySelector('.modal');
const openModalBtn = <HTMLButtonElement>document.querySelector('.menu__login-btn');
const closeModalBtn = <HTMLButtonElement>modal.querySelector('.modal__close-btn');

openModalBtn.addEventListener('click', () => {
  modal.classList.add('modal-show');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('modal-show');
})

modal.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.remove('modal-show')
  };
})

const btn_registration = <HTMLButtonElement>modal.querySelector('.btn-registration');
const btn_login = <HTMLButtonElement>modal.querySelector('.btn-login');

btn_registration.addEventListener('click', async () => {
  const name = (<HTMLInputElement>modal.querySelector('#reg-name')).value;
  const email = (<HTMLInputElement>modal.querySelector('#reg-email')).value;
  const password = (<HTMLInputElement>modal.querySelector('#reg-password')).value;

  const response = await createUser(name, email, password);

  if (response.status === EStatusCode.OK) {
    const loginResponse = await signIn(email, password);
    const loginData = await loginResponse.json();

    const { token, refreshToken, userId, name } = loginData;

    updateLocalStorageData(name, token, refreshToken, userId);

    alert(`${name} успешно зарегистрирован`);
  }

  if (response.status === EStatusCode.UNPROCESSABLE_ENTITY) {
    alert(`Incorrect e-mail or password`);
  }
});

btn_login.addEventListener('click', async () => {
  const email = (<HTMLInputElement>document.getElementById('log-email')).value;
  const password = (<HTMLInputElement>document.getElementById('log-password')).value;

  const loginResponse = await signIn(email, password);

  if (loginResponse.status === EStatusCode.OK) {
    const loginData = await loginResponse.json();

    const { token, refreshToken, userId, name } = loginData;

    updateLocalStorageData(name, token, refreshToken, userId);

    alert(`${name} успешно вошел в систему`);
  }

  if (loginResponse.status === EStatusCode.FORBIDDEN) {
    alert(`Incorrect e-mail or password`);
  }
});


  target.appendChild(modal);
};

export default Modal;