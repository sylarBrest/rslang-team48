import Router from '@library/Router.js';
import renderAudiocall from '@view/pages/Audiocall';
import renderHome from '@view/pages/Home';
import renderSprint from '@view/pages/Sprint';
import renderStat from '@view/pages/Stat';
import renderTeam from '@view/pages/Team';
import renderTutorial from '@view/pages/Tutorial';
import activeLinkHandler from '@handlers/headerHandlers/nav/activeLinkHandler';
import initCardHandlers from '../cardHandlers';
import initLevelHandlers from '../levelHandlers';

const router = new Router({
  mode: 'hash',
  root: '/',
});

const initRouterHandlers = () => {
  const main = <HTMLElement>document.querySelector('.main');

  router.add(/tutorial\/(.*)\/(.*)/, async (group: string, page: string) => {
    main.innerHTML = await renderTutorial(group, page);
    activeLinkHandler('tutorial');
    initCardHandlers();
    initLevelHandlers();
  });

  router.add(/sprint/, () => {
    main.innerHTML = renderSprint();
    activeLinkHandler('sprint');
  });

  router.add(/audiocall/, () => {
    main.innerHTML = renderAudiocall();
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
