import { getDateNow } from '@utils';
import { getKnownWords, getNewWords, getOptionalFromStatistic } from '@helpers';
import { TOptionalStat } from '@types';

import './style.scss';

const renderStat = async () => {
  const newWordsResults = await getNewWords();
  const knownWordsResults = await getKnownWords();

  const dateToday = getDateNow();
  const userStats = <TOptionalStat>(await getOptionalFromStatistic());

  const isToday = userStats.date === dateToday;
  const isSprintToday = userStats.sprint.date === dateToday;
  const isAudiocallToday = userStats.audiocall.date === dateToday;

  const newWordsToday = newWordsResults.results
    .filter((word) => word.userWord?.optional.dateNew === dateToday);
  const newWordsTodayCount = newWordsToday.length;
  const newWordsOverallCount = newWordsResults.count;

  const attemptsToday = isToday ? userStats.appeared : 0;
  const correctAnswersToday = isToday ? userStats.correct : 0;

  const correctAnswersTodayPercent = Math.round((correctAnswersToday / attemptsToday) * 100) || 0;

  const attemptsOverall = newWordsResults.results
    .reduce((sum, word) => sum + (word.userWord?.optional.appeared || 0), 0);
  const correctAnswersOverall = newWordsResults.results
    .reduce((sum, word) => sum + (word.userWord?.optional.correct || 0), 0);

  const correctAnswersOverallPercent = Math.round((correctAnswersOverall / attemptsOverall) * 100) || 0;

  const knownWordsTodayCount = knownWordsResults.results
    .filter((word) => word.userWord?.optional.dateKnown === dateToday)
    .length;
  const knownWordsOverallCount = knownWordsResults.count;

  const newWordsSprintCount = newWordsToday
    .filter((word) => word.userWord?.optional.gameNew === 'sprint')
    .length;
  const newWordsAudiocallCount = newWordsToday
    .filter((word) => word.userWord?.optional.gameNew === 'audiocall')
    .length;

  const sprintCorrectAnswersToday = isSprintToday ? userStats.sprint.correct : 0;
  const sprintAttempts = isSprintToday ? userStats.sprint.attempts : 0;
  const sprintStreak = isSprintToday ? userStats.sprint.streak : 0;
  const audiocallCorrectAnswersToday = isAudiocallToday ? userStats.audiocall.correct : 0;
  const audiocallAttempts = isAudiocallToday ? userStats.audiocall.attempts : 0;
  const audiocallStreak = isAudiocallToday ? userStats.audiocall.streak : 0;
  const sprintcorrectAnswersPercent = Math.round((sprintCorrectAnswersToday / sprintAttempts) * 100) || 0;
  const audiocallcorrectAnswersPercent = Math.round((audiocallCorrectAnswersToday / audiocallAttempts) * 100) || 0;

  return `
  <section class="container section">
    <div class="stat__wrapper">
      <h2>???????????????????? ???? ????????????</h2>
      <div class="stat__today">
        <div class="title">??????????????</div>
        <div class="stat__words-new">${newWordsTodayCount}
          <br>
          <span>??????????</span>
        </div>
        <div class="stat__words-learned">${knownWordsTodayCount}
          <br>
          <span>??????????????</span>
        </div>
        <div class="stat__right-answer">${correctAnswersTodayPercent}%
          <br>
          <span>????????????????????</span>
        </div>
      </div>
      <div class="stat__overall">
        <div class="title">???? ?????? ??????????</div>
        <div class="stat__words-new">${newWordsOverallCount}
          <br>
          <span>??????????</span>
        </div>
        <div class="stat__words-learned">${knownWordsOverallCount}
          <br>
          <span>??????????????</span>
        </div>
        <div class="stat__right-answer">${correctAnswersOverallPercent}%
          <br>
          <span>????????????????????</span>
        </div>
      </div>
      <h2>???????????????????? ???? ??????????</h2>
      <div class="stat__games">
        <div class="stat__sprint">
          <div class="stat__sprint-title">????????????</div>
          <div class="stat__sprint-learned">?????????? ????????: ${newWordsSprintCount}</div>
          <div class="stat__sprint-right-answer">???????????????????? ??????????????: ${sprintcorrectAnswersPercent}%</div>
          <div class="stat__sprint-streak">??????????
          ???????????????????? ??????????????: ${sprintStreak}</div>
        </div>
        <div class="stat__audiocall">
          <div class="stat__audiocall-title">????????????????????</div>
          <div class="stat__audiocall-learned">?????????? ????????: ${newWordsAudiocallCount}</div>
          <div class="stat__audiocall-right-answer">???????????????????? ??????????????: ${audiocallcorrectAnswersPercent}%</div>
          <div class="stat__audiocall-streak">??????????
          ???????????????????? ??????????????: ${audiocallStreak}</div>
        </div>
      </div>
    </div>
  </section>
  `;
};

export default renderStat;
