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
import {
  colorActiveButton, reDrawPageButtons, updatePaginationButtonsState,
  initSprintGame, initAudiocallGame,
} from '@helpers';
import initWindowHandlers from '@handlers/windowHandlers';
import initCardHandlers from '../cardHandlers';
import initButtonHandlers from '../buttonHandlers';
import activeLinkHandler from '../headerHandlers/nav/activeLinkHandler';

const router = new Router({
  mode: 'hash',
  root: '/home',
});

const initRouterHandlers = () => {
  const main = <HTMLElement>document.querySelector('.main');

  router.add('textbook/sprint', () => {
    main.innerHTML = renderStartGame(SPRINT_TITLE, SPRINT_DESCRIPTION, false);
    initSprintGame(false);
  });

  router.add('textbook/audiocall', () => {
    main.innerHTML = renderStartGame(AUDIOCALL_TITLE, AUDIOCALL_DESCRIPTION, false);
    initAudiocallGame(false);
  });

  router.add(/textbook/, async () => {
    main.innerHTML = await renderTextbook();
    activeLinkHandler('textbook');
    initCardHandlers();
    initButtonHandlers();
    reDrawPageButtons();
    colorActiveButton();
    updatePaginationButtonsState();
    initWindowHandlers();
  });

  router.add('games/sprint', () => {
    main.innerHTML = renderStartGame(SPRINT_TITLE, SPRINT_DESCRIPTION, true);
    initSprintGame(true);
    activeLinkHandler('sprint');
  });

  router.add('games/audiocall', () => {
    main.innerHTML = renderStartGame(AUDIOCALL_TITLE, AUDIOCALL_DESCRIPTION, true);
    initAudiocallGame(true);
    activeLinkHandler('audiocall');
  });

  router.add(/statistic/, async () => {
    main.innerHTML = await renderStat();
    activeLinkHandler('stat');
  });

  router.add(/team/, () => {
    main.innerHTML = renderTeam();
    activeLinkHandler('team');
  });

  router.add(/home/, () => {
    main.innerHTML = renderHome();
    activeLinkHandler('home');
    initWindowHandlers();
  });
};

export default initRouterHandlers;
