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
      .map((el, index) => Card({ ...el, index }))
      .reduce(
        (acc, item) => `${acc}${item}`,
        '',
      );
  }

  return content;
};

export const renderTextbook = async () => {
  const template = `
    <section class="textbook">
      <div class="textbook__header">
        <ul class="textbook__difficulties-bar">
          <li class="radio-container" data-group="0">
            <input type="radio" name="difficulty" class="radio-btn radio-btn_A1" id="A1" value="A1" />
            <label for="A1" class="radio-label">A1</label>
          </li>
          <li class="radio-container" data-group="1">
            <input type="radio" name="difficulty" class="radio-btn radio-btn_A2" id="A2" value="A2" />
            <label for="A2" class="radio-label">A2</label>
          </li>
          <li class="radio-container" data-group="2">
            <input type="radio" name="difficulty" class="radio-btn radio-btn_B1" id="B1" value="B1" />
            <label for="B1" class="radio-label">B1</label>
          </li>
          <li class="radio-container" data-group="3">
            <input type="radio" name="difficulty" class="radio-btn radio-btn_B2" id="B2" value="B2" />
            <label for="B2" class="radio-label">B2</label>
          </li>          
          <li class="radio-container" data-group="4">
            <input type="radio" name="difficulty" class="radio-btn radio-btn_C1" id="C1" value="C1" />
            <label for="C1" class="radio-label">C1</label>
          </li>
          <li class="radio-container" data-group="5">
            <input type="radio" name="difficulty" class="radio-btn radio-btn_C2" id="C2" value="C2" />
            <label for="C2" class="radio-label">C2</label>
          </li>
        </ul>
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
        
        <div class="textbook__games-bar">
          <a href="/#/textbook/audiocall" class="btn btn-neutral">Аудиовызов</a>
          <a href="/#/textbook/sprint" class="btn btn-neutral">Спринт</a>
        </div>        
      </div>
      <div class="textbook__body section container">
        ${await renderTextbookBody(wordsDataLocal.group, wordsDataLocal.page)}
      </div>
      <div class="textbook__footer">
        
      </div>
    </section>    
  `;
  return template;
};
