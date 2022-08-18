import './index.scss';
import { HOST } from './services/constants';
import { signIn } from './services/logins/signIn';
import { updateLocalStorageData } from './services/userData/updateUserData';
import { createUser } from './services/users/createUser';
import { getWords } from './services/words/getWords';
import { EStatusCode, TWordContent } from './types';

const navbarMenu = document.getElementById("menu") as HTMLElement;
const burgerMenu = document.getElementById("burger") as HTMLElement;
const headerMenu = document.getElementById("header") as HTMLElement;

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (window.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

const modal = <HTMLDivElement>document.querySelector('.modal');
const openModalBtn = <HTMLButtonElement>document.querySelector('.menu__login-btn');
const closeModalBtn = <HTMLButtonElement>document.querySelector('.modal__close-btn');

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
