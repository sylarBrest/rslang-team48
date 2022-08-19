import Router from '../../../library/Router';
import renderGames from '../../view/pages/Games';
import renderMain from '../../view/pages/Main';
import renderStat from '../../view/pages/Stat';
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

  router.add(/games/, () => {
    main.innerHTML = renderGames();
    activeLinkHandler('games');
  });

  router.add(/statistic/, () => {
    main.innerHTML = renderStat();
    activeLinkHandler('stat');
  });

  router.add('', () => {
    main.innerHTML = renderMain();
    activeLinkHandler('main');
  });
};

export default initRouterHandlers;
