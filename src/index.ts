import './index.css';
import { HOST } from './services/constants';
import { signIn } from './services/logins/signIn';
import { updateLocalStorageData } from './services/userData/updateUserData';
import { createUser } from './services/users/createUser';
import { getWords } from './services/words/getWords';
import { EStatusCode, TWordContent } from './types';

const btn_registration = <HTMLButtonElement>document.querySelector('.btn-registration');
const btn_login = <HTMLButtonElement>document.querySelector('.btn-login');

btn_registration.addEventListener('click', async () => {
  const name = (<HTMLInputElement>document.getElementById('reg-name')).value;
  const email = (<HTMLInputElement>document.getElementById('reg-email')).value;
  const password = (<HTMLInputElement>document.getElementById('reg-password')).value;

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

//! Электронный учебник

const r = await getWords();

if (r.status === EStatusCode.OK) {
  const q: TWordContent[] = await r.json();

  let t = '';

  q.forEach((item) => {
    t += `<div class="word">
      <img src="${HOST}/${item.image}" alt="" />
      <div class="word_text">${item.word}</div>
      <div class="word_transcription">${item.transcription}</div>
      <audio controls>
        <source src="${HOST}/${item.audio}" />
      </audio>
      <div class="word_translate">${item.wordTranslate}</div>
      <div class="word_text_meaning">${item.textMeaning}</div>
      <audio controls>
        <source src="${HOST}/${item.audioMeaning}" />
      </audio>
      <div class="word_text_meaning_translate">${item.textMeaningTranslate}</div>
      <div class="word_text_example">${item.textExample}</div>
      <audio controls>
        <source src="${HOST}/${item.audioExample}" />
      </audio>
      <div class="word_text_example_translate">${item.textExampleTranslate}</div>
    </div>`;
  });

  const w = <HTMLElement>document.querySelector('.words');

  w.innerHTML = t;
}
