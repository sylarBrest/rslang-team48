import { SPRINT } from '@constants';

const isSprintGame = () => {
  const url = window.location.href;

  return url.includes(SPRINT);
};

export default isSprintGame;
