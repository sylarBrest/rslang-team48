import { HOST } from '@constants';
import { TWordContent } from '@types';
import './style.scss';

const Card = ({
  image,
  word,
  transcription,
  // audio,
  wordTranslate,
  textMeaning,
  // audioMeaning,
  textMeaningTranslate,
  textExample,
  // audioExample,
  textExampleTranslate,
  index,
}: TWordContent & { index: number }) => {
  const template = `
  <div class="card" data-index="${index}">
    <div class="card__header">
      <img src="${HOST}/${image}" alt="${word}" class="card__image"/>
      <div class="card__header-row">
        <h4 class="card__heading">${word}<button class="card__audio-btn card__btn" /></h4>
        <h5 class="card__subheading">${wordTranslate}</h5>
        <h5 class="card__subheading word__transcription">${transcription}</h5>
      </div>
    </div>
    <div class="card__buttons">
      <button class="card__btn card__done-btn" />
      <button class="card__btn card__complex-btn" />
    </div>
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
    </div>
    <div class="card__footer">

    </div>
  </div>
  `;
  return template;
};

export default Card;
