import { DEFAULT_FILTER, EDifficulty, WORDS_PER_PAGE } from '@constants';
import getAllAggregatedWords from '@services/users/aggregatedWords/getAllAggregatedWords';
import createUserWord from '@services/users/words/createUserWord';
import updateUserWord from '@services/users/words/updateUserWord';
import { wordsDataLocal } from '@store';
import { TAggregatedWord } from 'modules/types/aggregated';

const cardClickHardHandler = () => {
  const hardIcons = document.querySelectorAll<HTMLElement>('.card__complex-btn');

  hardIcons.forEach((item) => {
    item.addEventListener('click', async (e: Event) => {
      const target = <HTMLElement>e.target;
      const wordId = String(target.getAttribute('data-word-id'));
      const isWordHard = target.classList.contains('card__complex-btn-yellow');
      const queries = {
        group: wordsDataLocal.group,
        page: wordsDataLocal.page,
        wordsPerPage: WORDS_PER_PAGE,
        filter: DEFAULT_FILTER,
      };

      target.classList.toggle('card__complex-btn-yellow');

      const response = await getAllAggregatedWords(queries);

      const result: TAggregatedWord[] = await response.json();

      const words = [...(<TAggregatedWord[]>result)[0].paginatedResults];

      // eslint-disable-next-line no-underscore-dangle
      const userWord = words.find((elem) => elem._id === wordId)?.userWord;

      if (userWord) {
        // eslint-disable-next-line prefer-const
        let { difficulty, optional } = userWord;

        if (target.previousElementSibling?.classList.contains('card__done-btn-green')) {
          target.previousElementSibling?.classList.toggle('card__done-btn-green');

          difficulty = EDifficulty.HARD;
        } else if (isWordHard) {
          difficulty = EDifficulty.UNSET;
        } else if (!isWordHard) {
          difficulty = EDifficulty.HARD;
        }

        await updateUserWord(wordId, difficulty, optional);
      } else {
        const optional = {
          isNew: false,
          dateNew: '',
          dateKnown: '',
          gameNew: '',
          appeared: 0,
          correct: 0,
          series: 0,
        };

        await createUserWord(wordId, EDifficulty.HARD, optional);
      }
    });
  });
};

export default cardClickHardHandler;
