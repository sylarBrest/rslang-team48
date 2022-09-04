import { TSprintGameAnswers } from '@types';

const getMaxStreak = (arr: TSprintGameAnswers[], elem: string): number => {
  let streak = 0;
  let temp = 0;

  arr.forEach((item) => {
    if (item.isCorrectAnswer === elem) {
      temp += 1;
    } else {
      temp = 0;
    }

    streak = temp > streak ? temp : streak;
  });

  return streak;
};

export default getMaxStreak;
