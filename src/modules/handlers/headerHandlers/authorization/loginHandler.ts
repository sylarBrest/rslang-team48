import signIn from '@services/logins/signIn';
import { updateUserData } from '@store';
import { EStatusCode } from '@constants';
import { TLoginData } from '@types';

const userLogin = async () => {
  const wrongFiller = <HTMLParagraphElement>document.querySelector('.wrong');

  const email = (<HTMLInputElement>document.getElementById('log-email')).value;
  const password = (<HTMLInputElement>document.getElementById('log-password')).value;

  if (password.length < 8) {
    const wrongText = '<p class="wrong">Длина пароля минимум 8 символов</p>';
    if (!wrongFiller) {
      document.querySelector('.btn-login')?.insertAdjacentHTML('beforebegin', wrongText);
    } else {
      wrongFiller.textContent = 'Длина пароля минимум 8 символов';
    }
  } else {
    const loginResponse = await signIn(email, password);

    if (loginResponse.status === EStatusCode.OK) {
      const loginData: TLoginData = await loginResponse.json();

      const {
        token, refreshToken, userId, name,
      } = loginData;

      updateUserData(name, userId, token, refreshToken);

      window.location.reload();
    }

    if (loginResponse.status === EStatusCode.FORBIDDEN || loginResponse.status === EStatusCode.NOT_FOUND) {
      const wrongText = '<p class="wrong">Неправильный логин и/или пароль</p>';
      if (!wrongFiller) {
        document.querySelector('.btn-login')?.insertAdjacentHTML('beforebegin', wrongText);
      } else {
        wrongFiller.textContent = 'Неправильный логин и/или пароль';
      }
    }
  }
};

const loginHandler = () => {
  const loginBtn = <HTMLButtonElement>document.querySelector('.btn-login');

  loginBtn.addEventListener('click', userLogin);
};

export default loginHandler;
