import './style.scss';
import { getWords } from '../../../services/words/getWords';
import { HOST } from '../../../services/constants';
import { TWordContent, EStatusCode } from '../../../types';

type Props = {
  target: HTMLElement,
};

async function Tutorial({ target }: Props) {
  const wordsContainer = document.createElement('section');
  wordsContainer.classList.add('section', 'container', 'words');

  const r = await getWords();

  if (r.status === EStatusCode.OK) {
    const q: TWordContent[] = await r.json();

    let t = '';

    q.forEach((item) => {
      t += `<div class='word'>
        <img src='${HOST}/${item.image}' alt='' />
        <div class='word_text'>${item.word}</div>
        <div class='word_transcription'>${item.transcription}</div>
        <audio controls>
          <source src='${HOST}/${item.audio}' />
        </audio>
        <div class='word_translate'>${item.wordTranslate}</div>
        <div class='word_text_meaning'>${item.textMeaning}</div>
        <audio controls>
          <source src='${HOST}/${item.audioMeaning}' />
        </audio>
        <div class='word_text_meaning_translate'>${item.textMeaningTranslate}</div>
        <div class='word_text_example'>${item.textExample}</div>
        <audio controls>
          <source src='${HOST}/${item.audioExample}' />
        </audio>
        <div class='word_text_example_translate'>${item.textExampleTranslate}</div>
      </div>`;
    });

    wordsContainer.innerHTML = t;
  }
  
  target.appendChild(wordsContainer);
}

export default Tutorial;