import { getDateNow } from '@utils';
import { getKnownWords, getNewWords, getOptionalFromStatistic } from '@helpers';

import './style.scss';
import { TOptionalStat } from '@types';

const renderStat = async () => {
  const newWordsResults = await getNewWords();
  const knownWordsResults = await getKnownWords();
  const userStats = <TOptionalStat>(await getOptionalFromStatistic());

  const newWordsToday = newWordsResults.results
    .filter((word) => word.userWord?.optional.dateNew === getDateNow());
  const newWordsTodayCount = newWordsToday.length;
  const newWordsOverallCount = newWordsResults.count;

  const attemptsToday = userStats.appeared;
  const correctAnswersToday = userStats.correct;

  const correctAnswersTodayPercent = Math.round((correctAnswersToday / attemptsToday) * 100) || 0;

  const attemptsOverall = newWordsResults.results
    .reduce((sum, word) => sum + (word.userWord?.optional.appeared || 0), 0);
  const correctAnswersOverall = newWordsResults.results
    .reduce((sum, word) => sum + (word.userWord?.optional.correct || 0), 0);

  const correctAnswersOverallPercent = Math.round((correctAnswersOverall / attemptsOverall) * 100) || 0;

  const knownWordsTodayCount = knownWordsResults.results
    .filter((word) => word.userWord?.optional.dateKnown === getDateNow())
    .length;
  const knownWordsOverallCount = knownWordsResults.count;

  const newWordsSprintCount = newWordsToday
    .filter((word) => word.userWord?.optional.gameNew === 'sprint')
    .length;
  const newWordsAudiocallCount = newWordsToday
    .filter((word) => word.userWord?.optional.gameNew === 'audiocall')
    .length;

  const sprintAttempts = userStats.sprint.date === getDateNow() ? userStats.sprint.attempts : 0;
  const sprintStreak = userStats.sprint.date === getDateNow() ? userStats.sprint.streak : 0;
  const audiocallAttempts = userStats.audiocall.date === getDateNow() ? userStats.audiocall.attempts : 0;
  const audiocallStreak = userStats.audiocall.date ? userStats.audiocall.streak : 0;
  const sprintcorrectAnswersPercent = Math.round((userStats.sprint.correct * 100) / sprintAttempts) || 0;
  const audiocallcorrectAnswersPercent = Math.round((userStats.audiocall.correct * 100) / audiocallAttempts) || 0;

  return `
  <section class="container section">
    <div class="stat__wrapper">
      <h2>Статистика по словам</h2>
      <div class="stat__today">
        <div class="title">Сегодня</div>
        <div class="stat__words-new">${newWordsTodayCount}
          <br>
          <span>новых</span>
        </div>
        <div class="stat__words-learned">${knownWordsTodayCount}
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
        <div class="stat__words-new">${newWordsOverallCount}
          <br>
          <span>новых</span>
        </div>
        <div class="stat__words-learned">${knownWordsOverallCount}
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
          <div class="stat__sprint-learned">Новых слов: ${newWordsSprintCount}</div>
          <div class="stat__sprint-right-answer">Правильных ответов: ${sprintcorrectAnswersPercent}%</div>
          <div class="stat__sprint-streak">Серия
          правильных ответов: ${sprintStreak}</div>
        </div>
        <div class="stat__audiocall">
          <div class="stat__audiocall-title">Аудиовызов</div>
          <div class="stat__audiocall-learned">Новых слов: ${newWordsAudiocallCount}</div>
          <div class="stat__audiocall-right-answer">Правильных ответов: ${audiocallcorrectAnswersPercent}%</div>
          <div class="stat__audiocall-streak">Серия
          правильных ответов: ${audiocallStreak}</div>
        </div>
      </div>
    </div>
  </section>
  `;
};

export default renderStat;
