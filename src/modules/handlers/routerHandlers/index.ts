import Router from '@library/Router.js';
import renderHome from '@view/pages/Home';
import renderStat from '@view/pages/Stat';
import renderTeam from '@view/pages/Team';
import { renderTextbook } from '@view/pages/Textbook';
import renderStartGame from '@view/pages/Game/startPage';
import {
  AUDIOCALL_DESCRIPTION, AUDIOCALL_TITLE,
  SPRINT_DESCRIPTION, SPRINT_TITLE,
} from '@constants';
import { initWordsData, wordsDataLocal } from '@store';
import startSprintGameHandler from '../gamesHandler/springGameHandlers/initSprintGameHandler';
import initCardHandlers from '../cardHandlers';
import initLevelHandlers from '../levelHandlers';
import activeLinkHandler from '../headerHandlers/nav/activeLinkHandler';

const router = new Router({
  mode: 'hash',
  root: '/',
});

const initRouterHandlers = () => {
  const main = <HTMLElement>document.querySelector('.main');

  router.add('textbook/sprint', () => {
    main.innerHTML = renderStartGame(SPRINT_TITLE, SPRINT_DESCRIPTION, false);
    startSprintGameHandler(false);
  });

  router.add('textbook/audiocall', () => {
    main.innerHTML = renderStartGame(AUDIOCALL_TITLE, AUDIOCALL_DESCRIPTION, false);
  });

  router.add(/textbook/, async () => {
    initWordsData();
    console.log(wordsDataLocal);
    main.innerHTML = await renderTextbook();
    activeLinkHandler('textbook');
    initCardHandlers();
    initLevelHandlers();
  });

  router.add('games/sprint', () => {
    main.innerHTML = renderStartGame(SPRINT_TITLE, SPRINT_DESCRIPTION, true);
    startSprintGameHandler(true);
    activeLinkHandler('sprint');
  });

  router.add('games/audiocall', () => {
    main.innerHTML = renderStartGame(AUDIOCALL_TITLE, AUDIOCALL_DESCRIPTION, true);
    activeLinkHandler('audiocall');
  });

  router.add(/statistic/, () => {
    main.innerHTML = renderStat();
    activeLinkHandler('stat');
  });

  router.add(/team/, () => {
    main.innerHTML = renderTeam();
    activeLinkHandler('team');
  });

  router.add('', () => {
    main.innerHTML = renderHome();
    activeLinkHandler('home');
  });
};

export default initRouterHandlers;
