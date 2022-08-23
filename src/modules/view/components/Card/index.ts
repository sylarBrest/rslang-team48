import { TWordContent } from '../../../types';
import { HOST } from '../../../services/constants';
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
}: TWordContent) => {
  const template = `
  <div class="card">
    <div class="card__header">
      <div class="card__row">
        <h4 class="card__heading">${word}<button class="card__audio"></h4>
        <h5 class="card__subheading">${wordTranslate}</h5>
      </div>
      
      <h5 class="card__subheading word__transcription">${transcription}</h5>
    </div>  
    <div class="card__body">
      <img src="${HOST}/${image}" alt="${word}" />
      <div class="card__row">
        ${textMeaning}
      </div>
      <div class="card__row">
        ${textMeaningTranslate}
      </div>
      <div class="card__row">
        ${textExample}
      </div>
      <div class="card__row">
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
