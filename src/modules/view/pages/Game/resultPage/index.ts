import { TRUE } from '@constants';
import { temporalSprintWordsData } from '@store/temporalData/temporalSprintWordsData';

import './style.scss';

const renderGameResult = () => {
  let fragment = '';
  const array = temporalSprintWordsData.gameAnswers;

  array.forEach((item) => {
    fragment += `
      <tr>
        <td data-audio="audio"></td>
        <td>${item.word}</td>
        <td>${item.wordTranslate}</td>
        <td>${item.isCorrectAnswer === TRUE ? '✔️' : '❌'}</td>
      </tr>
    `;
  });

  return `
  <div class="game__result">
    <div class="game__result-buttons">
      <a href="/#/" class="game__result-button game__result-home" title="вернуться на главную станицу"></a>
      <button class="game__result-button game__result-again" title="начать игру заного"></button>
    </div>
    <div class="game__result-table-wrapper">    
      <table>
          <tbody>
            ${fragment}
          </tbody>
      </table>
    </div>    
  </div>
  `;
};

export default renderGameResult;
