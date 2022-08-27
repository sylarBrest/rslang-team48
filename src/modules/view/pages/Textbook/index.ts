import { EStatusCode } from '@constants';
import getWords from '@services/words/getWords';
import { wordsDataLocal } from '@store';
import { TWordContent } from '@types';
import Card from '@view/components/Card';

import './style.scss';

export const renderTextbookBody = async (group: string, page: string) => {
  const response = await getWords(group, page);
  let content = '';
  if (response.status === EStatusCode.OK) {
    const words: TWordContent[] = await response.json();
    content = words
      .map(Card)
      .reduce((acc, item) => `${acc}${item}`, '');
  }

  return content;
};

export const renderTextbook = async () => {
  const template = `
    <section class="textbook section container">
      <div class="textbook__header">
        <div class="textbook__difficulties-bar">
          <button class="btn btn-darken difficulty-btn" data-group="0">A1</button>
          <button class="btn btn-darken difficulty-btn" data-group="1">A2</button>
          <button class="btn btn-darken difficulty-btn" data-group="2">B1</button>
          <button class="btn btn-darken difficulty-btn" data-group="3">B2</button>
          <button class="btn btn-darken difficulty-btn" data-group="4">C1</button>
          <button class="btn btn-darken difficulty-btn" data-group="5">C2</button>
        </div>
        <div class="textbook__games-bar">
          <a href="/#/textbook/audiocall" class="btn btn-neutral">Аудиовызов</a>
          <a href="/#/textbook/sprint" class="btn btn-neutral">Спринт</a>
        </div>
      </div>
      <div class="textbook__body">
        ${await renderTextbookBody(wordsDataLocal.group, wordsDataLocal.page)}
      </div>
      <div class="textbook__footer">
        <div class="textbook__pagination">
          <button class="btn first">&laquo;</button>
          <button class="btn prev">&lt;</button>
          <button class="btn page" data-page="0">1</button>
          <button class="btn page" data-page="1">2</button>
          <button class="btn page" data-page="2">3</button>
          <button class="btn page" data-page="3">4</button>
          <button class="btn page" data-page="4">5</button>
          <button class="btn next">&gt;</button>
          <button class="btn last">&raquo;</button>
        </div>
      </div>
    </section>    
  `;
  return template;
};
