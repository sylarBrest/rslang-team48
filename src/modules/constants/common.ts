export const SCROLL_DISTANCE = 85;

export const ALL_WORDS_ON_SERVER = '3600';

export const ZERO = '0';

export const SPRINT_TITLE = 'СПРИНТ';

export const SPRINT_DESCRIPTION = `Спринт - тренировка на скорость. Угадай как можно больше слов за 30 секунд. 
В игре для ответов можно использовать стрелки на клавиатуре.`;

export const AUDIOCALL_TITLE = 'АУДИОВЫЗОВ';

export const AUDIOCALL_DESCRIPTION = `
Тренировака Аудиовызов улучшает твое восприятие речи на слух. 
В игре можно использовать клавиши 1 - 5 для выбора ответов, 
Space для воспроизведения слова и клавишу Enter для переключения на следующий вопрос.
`;

export const DEFAULT_FILTER = `{"$or":[{"userWord.difficulty":"unset"},
{ "userWord.difficulty": "known" }, { "userWord.difficulty": "hard" }, { "userWord": null }]}`;

export const WITHOUT_KNOWN_FILTER = `{"$or":[{"userWord.difficulty":"unset"},
{ "userWord.difficulty": "hard" }, { "userWord": null }]}`;

export const SPRINT = 'sprint';

export const HIDDEN = 'hidden';

export const VISIBLE = 'visible';

export const ARROW_LEFT = 'ArrowLeft';

export const ARROW_RIGHT = 'ArrowRight';

export const ENTER = 'Enter';

export const BLANK_SPACE = ' ';

export const DIGIT_1 = '1';

export const DIGIT_2 = '2';

export const DIGIT_3 = '3';

export const DIGIT_4 = '4';

export const DIGIT_5 = '5';

export const INDEX_0 = 0;

export const INDEX_1 = 1;

export const INDEX_2 = 2;

export const INDEX_3 = 3;

export const INDEX_4 = 4;

export const FIRST_PAGE = 0;

export const LAST_PAGE = 29;

export const TRUE = 'true';

export const FALSE = 'false';

export const ANSWER_TIME = 30;

export const SECOND = 1000;

export const WORDS_PER_PAGE = '20';

export const MIN_WORDS_FOR_GAME = 5;

export enum ELocalStorage {
  USER = 'userData',
  WORDS = 'wordsData',
}

export enum EDifficulty {
  UNSET = 'unset',
  KNOWN = 'known',
  HARD = 'hard',
}

export const CARDS_ON_PAGE_COUNT = 20;

export const CARDS_COL_GAP = 32;

export const NAVBAR_HEIGHT = '3.2rem';
