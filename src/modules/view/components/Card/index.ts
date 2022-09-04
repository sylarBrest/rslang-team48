import { HOST } from '@constants';
import { userDataLocal } from '@store';
import { TWordContent } from 'modules/types/words';
import './style.scss';

const Card = ({
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
  index,
}: TWordContent & { index: number }) => {
  const template = `
  <div class="card" data-index="${index}">
    <div class="card__header">
      <img src="${HOST}/${image}" alt="${word}" class="card__image"/>
      <div class="card__header-row">
        <h4 class="card__heading">${word}<button 
        data-audio-files="${HOST}/${audio},${HOST}/${audioMeaning},${HOST}/${audioExample}"
        class="card__audio-btn card__btn" />
        <audio></audio>
        </h4>
        <h5 class="card__subheading">${wordTranslate}</h5>
        <h5 class="card__subheading word__transcription">${transcription}</h5>
      </div>
    </div>
    ${userDataLocal ? `<div class="card__buttons">
      <button class="card__btn card__done-btn" />
      <button class="card__btn card__complex-btn" />
    </div>` : ''}
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
      ${userDataLocal ? `<div class="card__row card__sprint">
        Спринт: 0/0
      </div>
      <div class="card__row card__audiocall">
        Аудиовызов: 0/0
      </div>` : ''}
    </div>
    <div class="card__footer">

    </div>
  </div>
  `;
  return template;
};

export default Card;
