import Router from '@library/Router.js';
import renderMain from '@view/pages/Main';
import renderStat from '@view/pages/Stat';
import renderTeam from '@view/pages/Team';
import renderTutorial from '@view/pages/Tutorial';
import activeLinkHandler from '@handlers/headerHandlers/nav/activeLinkHandler';
import renderStartGame from '@modules/view/pages/Game/menuGame';
import {
  AUDIOCALL_DESCRIPTION, AUDIOCALL_TITLE, SPRINT_DESCRIPTION, SPRINT_TITLE,
} from '@modules/constants/common';
import startSprintGameHandler from '../gamesHandler/springGameHandlers/initSprintGameHandler';

const router = new Router({
  mode: 'hash',
  root: '/',
});

const initRouterHandlers = () => {
  const main = <HTMLElement>document.querySelector('.main');

  router.add(/tutorial/, async () => {
    main.innerHTML = await renderTutorial();
    activeLinkHandler('tutorial');
  });

  router.add(/sprint/, () => {
    main.innerHTML = renderStartGame(SPRINT_TITLE, SPRINT_DESCRIPTION);
    startSprintGameHandler(true);
    activeLinkHandler('sprint');
  });

  router.add(/audiocall/, () => {
    main.innerHTML = renderStartGame(AUDIOCALL_TITLE, AUDIOCALL_DESCRIPTION);
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
    main.innerHTML = renderMain();
    activeLinkHandler('main');
  });
};

export default initRouterHandlers;
