import { EDifficulty } from '@constants';
import getAggregatedWord from '@services/users/aggregatedWords/getAggregatedWord';
import createUserWord from '@services/users/words/createUserWord';
import updateUserWord from '@services/users/words/updateUserWord';
import { TDifficulty, TWordContent } from '@types';
import { getDateNow } from '@utils';

const cardClickKnownHandler = () => {
  const knownIcons = document.querySelectorAll<HTMLElement>('.card__done-btn');

  knownIcons.forEach((item) => {
    item.addEventListener('click', async (e: Event) => {
      const target = <HTMLElement>e.target;
      const wordId = String(target.getAttribute('data-word-id'));
      const card = <HTMLElement>target.parentElement?.parentElement;

      target.classList.toggle('card__done-btn-green');

      const response = await getAggregatedWord(wordId);

      const aggregatedWord: TWordContent[] = await response.json();

      if (aggregatedWord[0].userWord) {
        const { difficulty, optional } = aggregatedWord[0].userWord;

        let newDifficulty: TDifficulty = 'hard';

        if (difficulty === EDifficulty.HARD) {
          target.nextElementSibling?.classList.toggle('card__complex-btn-yellow');

          newDifficulty = EDifficulty.KNOWN;
          optional.dateKnown = getDateNow();
          optional.series = 0;
        } else if (difficulty === EDifficulty.KNOWN) {
          newDifficulty = EDifficulty.UNSET;
          optional.dateKnown = 'null';
        } else {
          newDifficulty = EDifficulty.KNOWN;
          optional.dateKnown = getDateNow();
          optional.series = 0;
        }

        card.setAttribute('data-difficulty', newDifficulty);
        return updateUserWord(wordId, newDifficulty, optional);
      }

      const optional = {
        isNew: false,
        dateNew: 'null',
        dateKnown: getDateNow(),
        gameNew: 'null',
        appeared: 0,
        correct: 0,
        series: 0,
      };

      card.setAttribute('data-difficulty', EDifficulty.KNOWN);
      return createUserWord(wordId, EDifficulty.KNOWN, optional);
    });
  });
};

export default cardClickKnownHandler;
