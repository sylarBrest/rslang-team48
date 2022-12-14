import { EDifficulty, HOST } from '@constants';
import { userDataLocal, wordsDataLocal } from '@store';
import { TWordContent } from '@types';
import './style.scss';

const Card = ({
  _id,
  image,
  word,
  transcription,
  audio,
  wordTranslate,
  textMeaning,
  audioMeaning,
  textMeaningTranslate,
  textExample,
  audioExample,
  textExampleTranslate,
  userWord,
  index,
}: TWordContent & { index: number }) => {
  let level = 'A1';

  switch (wordsDataLocal.group) {
    case '0':
      level = 'A1';
      break;
    case '1':
      level = 'A2';
      break;
    case '2':
      level = 'B1';
      break;
    case '3':
      level = 'B2';
      break;
    case '4':
      level = 'C1';
      break;
    case '5':
      level = 'C2';
      break;
    case '6':
      level = 'H';
      break;
    default:
      level = 'A1';
  }

  const result = `${userWord?.optional.correct}/${userWord?.optional.appeared}`;
  const template = `
  <div class="card" data-index="${index}" ${userWord?.difficulty ? `data-difficulty="${userWord?.difficulty}"` : ''}>
    <div class="card__header ${level}-border">
      <img src="${HOST}/${image}" alt="${word}" class="card__image"/>
      <div class="card__header-row">
        <h4 class="card__heading">${word}<button 
        data-audio-files="${HOST}/${audio},${HOST}/${audioMeaning},${HOST}/${audioExample}"
        class="card__audio-btn card__btn" />
        <audio></audio>
        </h4>
        <h5 class="card__subheading">${wordTranslate}</h5>
        <h5 class="card__subheading word__transcription">${transcription}</h5>
        <div class="card__down-arrow-wrapper">
          <div class="card__down-arrow"></div>
        </div>
      </div>
    </div>
    ${
  userDataLocal
    ? `<div class="
      card__buttons${userWord?.difficulty && userWord?.difficulty !== EDifficulty.UNSET ? ' card__buttons_active' : ''}
      ">
      <button data-word-id="${_id}" class="card__btn card__done-btn
      ${userWord?.difficulty === 'known' ? 'card__done-btn-green' : ''}"
      ${+wordsDataLocal.group === 6 ? 'hidden' : ''}></button>
      <button data-word-id="${_id}" class="card__btn card__complex-btn
      ${userWord?.difficulty === EDifficulty.HARD ? 'card__complex-btn-yellow' : ''}"
      ${userWord?.difficulty === EDifficulty.HARD && +wordsDataLocal.group !== 6 ? 'disabled' : ''}></button>
    </div>`
    : ''
}
    <div class="card__body">
      <div class="card__row">
        ${textMeaning}
      </div>
      <div class="card__row translate">
        ${textMeaningTranslate}
      </div>
      <div class="card__row">
        ${textExample}
      </div>
      <div class="card__row translate">
        ${textExampleTranslate}
      </div>
      ${
  userDataLocal
    ? `<div class="card__row card__sprint">
        ???????????????? ?? ??????????: ${userWord ? result : '0/0'}
      </div>`
    : ''
}
    </div>
    <div class="card__footer">

    </div>
  </div>
  `;
  return template;
};

export default Card;
