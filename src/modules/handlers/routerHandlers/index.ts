import Router from '@library/Router.js';
import renderHome from '@view/pages/Home';
import renderStat from '@view/pages/Stat';
import renderTeam from '@view/pages/Team';
import { renderTextbook } from '@view/pages/Textbook';
import renderStartGame from '@view/pages/Game/startPage';
import {
  AUDIOCALL_DESCRIPTION, AUDIOCALL_TITLE,
  SPRINT_DESCRIPTION, SPRINT_TITLE, ZERO,
} from '@constants';
import { initWordsData, updateWordsData } from '@store';
import { colorActiveButton, reDrawPageButtons } from '@helpers';
import startSprintGameHandler from '../gamesHandler/springGameHandlers/initSprintGameHandler';
import initCardHandlers from '../cardHandlers';
import initButtonHandlers from '../buttonHandlers';
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
    main.innerHTML = await renderTextbook();
    activeLinkHandler('textbook');
    initCardHandlers();
    initButtonHandlers();
    reDrawPageButtons();
    colorActiveButton();
  });

  router.add('games/sprint', () => {
    updateWordsData(ZERO, ZERO);
    main.innerHTML = renderStartGame(SPRINT_TITLE, SPRINT_DESCRIPTION, true);
    startSprintGameHandler(true);
    activeLinkHandler('sprint');
  });

  router.add('games/audiocall', () => {
    updateWordsData(ZERO, ZERO);
    main.innerHTML = renderStartGame(AUDIOCALL_TITLE, AUDIOCALL_DESCRIPTION, true);
    activeLinkHandler('audiocall');
  });

  router.add(/statistic/, () => {
    updateWordsData(ZERO, ZERO);
    main.innerHTML = renderStat();
    activeLinkHandler('stat');
  });

  router.add(/team/, () => {
    updateWordsData(ZERO, ZERO);
    main.innerHTML = renderTeam();
    activeLinkHandler('team');
  });

  router.add('', () => {
    updateWordsData(ZERO, ZERO);
    main.innerHTML = renderHome();
    activeLinkHandler('home');
  });
};

export default initRouterHandlers;
