import Router from '@library/Router.js';
import renderHome from '@view/pages/Home';
import renderStat from '@view/pages/Stat';
import renderTeam from '@view/pages/Team';
import renderTutorial from '@view/pages/Tutorial';
import activeLinkHandler from '@handlers/headerHandlers/nav/activeLinkHandler';
import renderStartGame from '@view/pages/Game/startPage';
import {
  AUDIOCALL_DESCRIPTION, AUDIOCALL_TITLE, SPRINT_DESCRIPTION, SPRINT_TITLE,
} from '@constants';
import startSprintGameHandler from '../../helpers/initSprintGame';
import initCardHandlers from '../cardHandlers';
import startAudiocallGameHandler from '../../helpers/initAudiocallGame';

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
    startAudiocallGameHandler(false);
  });

  router.add('textbook', async () => {
    main.innerHTML = await renderTutorial();
    activeLinkHandler('tutorial');
    initCardHandlers();
  });

  router.add('games/sprint', () => {
    main.innerHTML = renderStartGame(SPRINT_TITLE, SPRINT_DESCRIPTION, true);
    startSprintGameHandler(true);
    activeLinkHandler('sprint');
  });

  router.add('games/audiocall', () => {
    main.innerHTML = renderStartGame(AUDIOCALL_TITLE, AUDIOCALL_DESCRIPTION, true);
    startAudiocallGameHandler(true);
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
