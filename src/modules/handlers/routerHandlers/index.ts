import Router from '../../../library/Router';
import renderAudiocall from '../../view/pages/Audiocall';
import renderMain from '../../view/pages/Main';
import renderSprint from '../../view/pages/Sprint';
import renderStat from '../../view/pages/Stat';
import renderTeam from '../../view/pages/Team';
import renderTutorial from '../../view/pages/Tutorial';
import activeLinkHandler from '../headerHandlers/nav/activeLinkHandler';

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
    main.innerHTML = renderMain();
    activeLinkHandler('main');
  });
};

export default initRouterHandlers;
