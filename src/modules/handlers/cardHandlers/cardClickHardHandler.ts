import { EDifficulty } from '@constants';
import { updateGameButtons } from '@helpers';
import getAggregatedWord from '@services/users/aggregatedWords/getAggregatedWord';
import createUserWord from '@services/users/words/createUserWord';
import updateUserWord from '@services/users/words/updateUserWord';
import { wordsDataLocal } from '@store';
import { TWordContent } from '@types';

const cardClickHardHandler = () => {
  const hardIcons = document.querySelectorAll<HTMLElement>('.card__complex-btn');

  hardIcons.forEach((item) => {
    item.addEventListener('click', async (e: Event) => {
      const target = <HTMLElement>e.target;
      const wordId = String(target.getAttribute('data-word-id'));
      const card = <HTMLElement>target.parentElement?.parentElement;

      target.classList.toggle('card__complex-btn-yellow');

      const response = await getAggregatedWord(wordId);

      const aggregatedWord: TWordContent[] = await response.json();

      if (aggregatedWord[0].userWord) {
        const { difficulty, optional } = aggregatedWord[0].userWord;

        let newDifficulty = difficulty;

        if (difficulty === EDifficulty.KNOWN) {
          target.previousElementSibling?.classList.toggle('card__done-btn-green');

          newDifficulty = EDifficulty.HARD;
          optional.series = 0;
          optional.dateKnown = 'null';
        } else if (difficulty === EDifficulty.HARD) {
          newDifficulty = EDifficulty.UNSET;
          optional.series = 0;
        } else {
          newDifficulty = EDifficulty.HARD;
          optional.series = 0;
        }

        card.setAttribute('data-difficulty', newDifficulty);
        if (+wordsDataLocal.group === 6) {
          card.style.display = 'none';
        } else {
          updateGameButtons();
        }

        return updateUserWord(wordId, newDifficulty, optional);
      }

      const optional = {
        isNew: false,
        dateNew: 'null',
        dateKnown: 'null',
        gameNew: 'null',
        appeared: 0,
        correct: 0,
        series: 0,
      };

      card.setAttribute('data-difficulty', EDifficulty.KNOWN);
      return createUserWord(wordId, EDifficulty.HARD, optional);
    });
  });
};

export default cardClickHardHandler;
