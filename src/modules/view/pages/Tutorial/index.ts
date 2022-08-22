import { HOST } from '../../../services/constants';
import getWords from '../../../services/words/getWords';
import { EStatusCode, TWordContent } from '../../../types';

import './style.scss';

const renderTutorial = async () => {
  const response = await getWords();

  if (response.status === EStatusCode.OK) {
    const words: TWordContent[] = await response.json();
    let fragment = '';

    words.forEach((item) => {
      fragment += `<div class="word">
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

    return fragment;
  }

  return '';
};

export default renderTutorial;
