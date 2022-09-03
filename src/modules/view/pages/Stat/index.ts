import getDateNow from 'modules/helpers/games/getDateNow';
import getOptionalFromStatistic from 'modules/helpers/games/getOptionalFromStatistic';
import { getKnownWords, getNewWords } from '@helpers';

import './style.scss';

const renderStat = async () => {
  const newWordsResults = await getNewWords();
  const knownWordsResults = await getKnownWords();

  const newWordsToday = newWordsResults.results.filter(
    (word) => word.userWord?.optional.dateNew === getDateNow(),
  ).length;
  const newWordsOverall = newWordsResults.count;

  const attemptsToday = newWordsResults.results
    .filter((word) => word.userWord?.optional.dateNew === getDateNow())
    .reduce((sum, word) => sum + (word.userWord?.optional.appeared || 0), 0);
  const correctAnswersToday = newWordsResults.results
    .filter((word) => word.userWord?.optional.dateNew === getDateNow())
    .reduce((sum, word) => sum + (word.userWord?.optional.correct || 0), 0);

  const correctAnswersTodayPercent = Math.round((correctAnswersToday / attemptsToday) * 100) || 0;

  const attemptsOverall = newWordsResults.results
    .reduce((sum, word) => sum + (word.userWord?.optional.appeared || 0), 0);
  const correctAnswersOverall = newWordsResults.results
    .reduce((sum, word) => sum + (word.userWord?.optional.correct || 0), 0);

  const correctAnswersOverallPercent = Math.round((correctAnswersOverall / attemptsOverall) * 100) || 0;

  const knownWordsToday = knownWordsResults.results.filter(
    (word) => word.userWord?.optional.dateKnown === getDateNow(),
  ).length;
  const knownWordsOverall = knownWordsResults.count;

  const optional = await getOptionalFromStatistic();
  const sprintAnswers = optional.sprint.right + optional.sprint.wrong;
  const audiocallAnswers = optional.audiocall.right + optional.audiocall.wrong;
  const sprintcorrectAnswersPercent = Math.round((optional.sprint.right * 100) / sprintAnswers) || 0;
  const audiocallcorrectAnswersPercent = Math.round((optional.audiocall.right * 100) / audiocallAnswers) || 0;

  return `
  <section class="container section">
    <div class="stat__wrapper">
      <h2>Статистика по словам</h2>
      <div class="stat__today">
        <div class="title">Сегодня</div>
        <div class="stat__words-new">${newWordsToday}
          <br>
          <span>новых</span>
        </div>
        <div class="stat__words-learned">${knownWordsToday}
          <br>
          <span>изучено</span>
        </div>
        <div class="stat__right-answer">${correctAnswersTodayPercent}%
          <br>
          <span>правильных</span>
        </div>
      </div>
      <div class="stat__overall">
        <div class="title">За всё время</div>
        <div class="stat__words-new">${newWordsOverall}
          <br>
          <span>новых</span>
        </div>
        <div class="stat__words-learned">${knownWordsOverall}
          <br>
          <span>изучено</span>
        </div>
        <div class="stat__right-answer">${correctAnswersOverallPercent}%
          <br>
          <span>правильных</span>
        </div>
      </div>
      <h2>Статистика по играм</h2>
      <div class="stat__games">
        <div class="stat__sprint">
          <div class="stat__sprint-title">Спринт</div>
          <div class="stat__sprint-learned">Изучено слов: ${sprintAnswers}</div>
          <div class="stat__sprint-right-answer">Правильных ответов: ${sprintcorrectAnswersPercent}%</div>
          <div class="stat__sprint-streak">Серия
          правильных ответов: ${optional.sprint.streak}</div>
        </div>
        <div class="stat__audiocall">
          <div class="stat__audiocall-title">Аудиовызов</div>
          <div class="stat__audiocall-learned">Изучено слов: ${audiocallAnswers}</div>
          <div class="stat__audiocall-right-answer">Правильных ответов: ${audiocallcorrectAnswersPercent}%</div>
          <div class="stat__audiocall-streak">Серия
          правильных ответов: ${optional.audiocall.streak}</div>
        </div>
      </div>
    </div>
  </section>
  `;
};

export default renderStat;
