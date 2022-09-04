import { TWordContent } from './words';
import { TDifficulty, TOptionalWord } from './optional';

export type TUserAggregatedWord = {
  difficulty: TDifficulty;
  optional: TOptionalWord;
};

type TCombinedWord = TWordContent & {
  userWord?: TUserAggregatedWord;
};

export type TAggregatedWord = {
  paginatedResults: TCombinedWord[];
  totalCount: [{ count: number }],
};

export type TQueriesAggregated = {
  group: string;
  page: string;
  wordsPerPage: string;
  filter: string;
};
