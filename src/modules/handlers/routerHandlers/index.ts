import Router from '../../../library/Router';
import renderGames from '../../view/pages/Games';
import renderMain from '../../view/pages/Main';
import renderStat from '../../view/pages/Stat';
import renderTutorial from '../../view/pages/Tutorial';

const router = new Router({
  mode: 'hash',
  root: '/',
});

const initRouterHandlers = () => {
  const main = <HTMLElement>document.querySelector('.main');

  router.add(/tutorial/, async () => {
    main.innerHTML = await renderTutorial();
  });

  router.add(/games/, () => {
    main.innerHTML = renderGames();
  });

  router.add(/statistic/, () => {
    main.innerHTML = renderStat();
  });

  router.add('', () => {
    main.innerHTML = renderMain();
  });
};

export default initRouterHandlers;
