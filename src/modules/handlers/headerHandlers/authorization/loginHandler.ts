import signIn from '@services/logins/signIn';
import { updateUserData } from '@store';
import {
  EStatusCode, EWrongText,
  MIN_PASSWORD_LENGTH, EMAIL_REGEXP, PASSWORD_REGEXP,
} from '@constants';
import { TLoginData } from '@types';

const userLogin = async () => {
  const wrongFiller = <HTMLParagraphElement>document.querySelector('.wrong');

  const email = (<HTMLInputElement>document.getElementById('log-email')).value;
  const password = (<HTMLInputElement>document.getElementById('log-password')).value;

  if (password.length < MIN_PASSWORD_LENGTH && !PASSWORD_REGEXP.test(password)) {
    const wrongText = `<p class="wrong">${EWrongText.password}</p>`;

    if (!wrongFiller) {
      document.querySelector('.btn-login')?.insertAdjacentHTML('beforebegin', wrongText);
    } else {
      wrongFiller.textContent = EWrongText.password;
    }
  } else if (!EMAIL_REGEXP.test(email)) {
    const wrongText = `<p class="wrong">${EWrongText.email}</p>`;
    if (!wrongFiller) {
      document.querySelector('.btn-login')?.insertAdjacentHTML('beforebegin', wrongText);
    } else {
      wrongFiller.textContent = EWrongText.email;
    }
  } else {
    const loginResponse = await signIn(email, password);

    if (loginResponse.status === EStatusCode.OK) {
      const loginData: TLoginData = await loginResponse.json();

      const {
        token, refreshToken, userId, name,
      } = loginData;

      await updateUserData(name, userId, token, refreshToken);

      window.location.replace('/#/home');
      window.location.reload();
    }

    if (loginResponse.status === EStatusCode.FORBIDDEN || loginResponse.status === EStatusCode.NOT_FOUND) {
      const wrongText = `<p class="wrong">${EWrongText.common}</p>`;
      if (!wrongFiller) {
        document.querySelector('.btn-login')?.insertAdjacentHTML('beforebegin', wrongText);
      } else {
        wrongFiller.textContent = EWrongText.common;
      }
    }
  }
};

const loginHandler = () => {
  const loginBtn = <HTMLButtonElement>document.querySelector('.btn-login');

  loginBtn.addEventListener('click', userLogin);
};

export default loginHandler;
