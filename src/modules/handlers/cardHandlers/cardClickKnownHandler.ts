import { DEFAULT_FILTER, EDifficulty, WORDS_PER_PAGE } from '@constants';
import getAllAggregatedWords from '@services/users/aggregatedWords/getAllAggregatedWords';
import createUserWord from '@services/users/words/createUserWord';
import updateUserWord from '@services/users/words/updateUserWord';
import { wordsDataLocal } from '@store';
import { getDateNow } from '@utils';
import { TAggregatedWord } from 'modules/types/aggregated';

const cardClickKnownHandler = () => {
  const knownIcons = document.querySelectorAll<HTMLElement>('.card__done-btn');

  knownIcons.forEach((item) => {
    item.addEventListener('click', async (e: Event) => {
      const target = <HTMLElement>e.target;
      const wordId = String(target.getAttribute('data-word-id'));
      const isWordKnown = target.classList.contains('card__done-btn-green');
      const queries = {
        group: wordsDataLocal.group,
        page: wordsDataLocal.page,
        wordsPerPage: WORDS_PER_PAGE,
        filter: DEFAULT_FILTER,
      };

      const response = await getAllAggregatedWords(queries);

      const result: TAggregatedWord[] = await response.json();

      const words = [...(<TAggregatedWord[]>result)[0].paginatedResults];

      console.log(words);

      // eslint-disable-next-line no-underscore-dangle
      const userWord = words.find((elem) => elem._id === wordId)?.userWord;

      if (userWord) {
        // eslint-disable-next-line prefer-const
        let { difficulty, optional } = userWord;

        if (target.nextElementSibling?.classList.contains('card__complex-btn-yellow')) {
          target.nextElementSibling?.classList.toggle('card__complex-btn-yellow');

          difficulty = EDifficulty.KNOWN;
          optional.dateKnown = getDateNow();
          optional.series = 0;
        } else if (isWordKnown) {
          difficulty = EDifficulty.UNSET;
          optional.dateKnown = '';
        } else if (!isWordKnown) {
          difficulty = EDifficulty.KNOWN;
          optional.dateKnown = getDateNow();
          optional.series = 0;
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

        await createUserWord(wordId, EDifficulty.KNOWN, optional);
      }

      target.classList.toggle('card__done-btn-green');
    });
  });
};

export default cardClickKnownHandler;
