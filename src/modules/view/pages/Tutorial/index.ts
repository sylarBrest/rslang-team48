import { EStatusCode } from '@constants';
import getWords from '@services/words/getWords';
import { TWordContent } from '@types';
import Card from '@view/components/Card';

import './style.scss';

const renderTutorial = async () => {
  const response = await getWords();
  let content = '';
  if (response.status === EStatusCode.OK) {
    const words: TWordContent[] = await response.json();
    content = words
      .map(Card)
      .reduce((acc, item) => `${acc}${item}`, '');
  }

  const template = `
    <section class="tutorial section container">
      <div class="tutorial__header">
        <div class="tutorial__difficulties-bar">
          <button class="btn btn-darken difficulty-btn">A1</button>
          <button class="btn btn-darken difficulty-btn">A2</button>
          <button class="btn btn-darken difficulty-btn">B1</button>
          <button class="btn btn-darken difficulty-btn">B2</button>
          <button class="btn btn-darken difficulty-btn">C1</button>
          <button class="btn btn-darken difficulty-btn">C2</button>
        </div>
        <div class="tutorial__games-bar">
          <a href="/#/textbook/audiocall" class="btn btn-neutral">Аудиовызов</a>
          <a href="/#/textbook/sprint" class="btn btn-neutral">Спринт</a>
        </div>
      </div>
      <div class="tutorial__body">
        ${content}
      </div>
      <div class="tutorial__footer">
        <div class="tutorial__pagination">
          <button class="btn">1</button>
          <button class="btn">2</button>
          <button class="btn">3</button>
          <button class="btn">4</button>
          <button class="btn">5</button>
          <button class="btn">...</button>
          <button class="btn">30</button>
        </div>
      </div>
    </section>    
  `;
  return template;
};

export default renderTutorial;
