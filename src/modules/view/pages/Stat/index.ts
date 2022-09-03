/* eslint-disable no-mixed-operators */
import getDateNow from 'modules/helpers/games/getDateNow';
import getOptionalFromStatistic from 'modules/helpers/games/getOptionalFromStatistic';
import { getNewWords } from '@helpers';

import './style.scss';

const renderStat = async () => {
  const newWordsResults = await getNewWords();

  const newWordsToday = newWordsResults.results.filter(
    (word) => word.userWord?.optional.dateNew === getDateNow(),
  ).length;
  const newWordsOverall = newWordsResults.count;

  const optional = await getOptionalFromStatistic();
  console.log(optional);
  const sprintAnswers = optional.sprint.right + optional.sprint.wrong;
  const audiocallAnswers = optional.audiocall.right + optional.audiocall.wrong;
  const rightAnswersToday = newWordsOverall;
  const rightAnswersTodayPercent = Math.round((rightAnswersToday * 100) / (sprintAnswers + audiocallAnswers)) || 0;
  const sprintRightAnswersPercent = Math.round((optional.sprint.right * 100) / sprintAnswers) || 0;
  const audiocallRightAnswersPercent = Math.round((optional.audiocall.right * 100) / audiocallAnswers) || 0;
  const rightAnswersOverallPercent = Math.round((optional.correctly * 100) / optional.appeared) || 0;

  return `
  <section class="container section">
    <div class="stat__wrapper">
      <h2>Статистика по словам</h2>
      <div class="stat__today">
        <div class="stat__words-new">${newWordsToday}
          <br>
          <span>новых</span>
        </div>
        <div class="stat__words-learned">${sprintAnswers + audiocallAnswers}
          <br>
          <span>изучено</span>
        </div>
        <div class="stat__right-answer">${rightAnswersTodayPercent}%
          <br>
          <span>правильных</span>
        </div>
      </div>
      <h2>Статистика по играм</h2>
      <div class="stat__games">
        <div class="stat__sprint">
          <div class="stat__sprint-title">Спринт</div>
          <div class="stat__sprint-learned">Изучено слов: ${sprintAnswers}</div>
          <div class="stat__sprint-right-answer">Правильных ответов: ${sprintRightAnswersPercent}%</div>
          <div class="stat__sprint-streak">Серия
          правильных ответов: ${optional.sprint.streak}</div>
        </div>
        <div class="stat__audiocall">
          <div class="stat__audiocall-title">Аудиовызов</div>
          <div class="stat__audiocall-learned">Изучено слов: ${audiocallAnswers}</div>
          <div class="stat__audiocall-right-answer">Правильных ответов: ${audiocallRightAnswersPercent}%</div>
          <div class="stat__audiocall-streak">Серия
          правильных ответов: ${optional.audiocall.streak}</div>
        </div>
      </div>
      <h2>Статистика за все время</h2>
      <div class="stat__overall">
        <div class="stat__words-new">${newWordsOverall}
          <br>
          <span>новых</span>
        </div>
        <div class="stat__words-learned">${newWordsOverall}
          <br>
          <span>изучено</span>
        </div>
        <div class="stat__right-answer">${rightAnswersOverallPercent}%
          <br>
          <span>правильных</span>
        </div>
      </div>
    </div>
  </section>
  `;
};

export default renderStat;
