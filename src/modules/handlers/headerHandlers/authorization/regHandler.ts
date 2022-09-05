import signIn from '@services/logins/signIn';
import createUser from '@services/users/createUser';
import { updateUserData } from '@store';
import {
  EMAIL_REGEXP,
  EStatusCode, EWrongText,
  MAX_USERNAME_LENGTH, MIN_PASSWORD_LENGTH, MIN_USERNAME_LENGTH,
  PASSWORD_REGEXP, USERNAME_REGEXP,
} from '@constants';
import { TLoginData } from '@types';
import { updateTextbookStatistics } from '@helpers';

const userRegistration = async () => {
  const wrongFiller = <HTMLParagraphElement>document.querySelector('.wrong');

  const username = (<HTMLInputElement>document.querySelector('#reg-name')).value;
  const email = (<HTMLInputElement>document.querySelector('#reg-email')).value;
  const password = (<HTMLInputElement>document.querySelector('#reg-password')).value;

  if (password.length < MIN_PASSWORD_LENGTH && !PASSWORD_REGEXP.test(password)) {
    const wrongText = `<p class="wrong">${EWrongText.password}</p>`;

    if (!wrongFiller) {
      document.querySelector('.btn-registration')?.insertAdjacentHTML('beforebegin', wrongText);
    } else {
      wrongFiller.textContent = EWrongText.password;
    }
  } else if ((username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH)
    && !USERNAME_REGEXP.test(username)) {
    const wrongText = `<p class="wrong">${EWrongText.username}</p>`;

    if (!wrongFiller) {
      document.querySelector('.btn-registration')?.insertAdjacentHTML('beforebegin', wrongText);
    } else {
      wrongFiller.textContent = EWrongText.username;
    }
  } else if (!EMAIL_REGEXP.test(email)) {
    const wrongText = `<p class="wrong">${EWrongText.email}</p>`;

    if (!wrongFiller) {
      document.querySelector('.btn-registration')?.insertAdjacentHTML('beforebegin', wrongText);
    } else {
      wrongFiller.textContent = EWrongText.email;
    }
  } else {
    const response = await createUser(username, email, password);

    if (response.status === EStatusCode.OK) {
      const loginResponse = await signIn(email, password);
      const loginData: TLoginData = await loginResponse.json();

      const {
        token, refreshToken, userId, name,
      } = loginData;

      updateUserData(name, userId, token, refreshToken);

      await updateTextbookStatistics();

      window.location.reload();
    }

    if (response.status === EStatusCode.UNPROCESSABLE_ENTITY) {
      const wrongText = `<p class="wrong">${EWrongText.common}</p>`;
      if (!wrongFiller) {
        document.querySelector('.btn-registration')?.insertAdjacentHTML('beforebegin', wrongText);
      } else {
        wrongFiller.textContent = EWrongText.common;
      }
    }
  }
};

const regHandler = () => {
  const regBtn = <HTMLButtonElement>document.querySelector('.btn-registration');

  regBtn.addEventListener('click', userRegistration);
};

export default regHandler;
