import './index.scss';

import Menu from './view/components/Menu';
import Modal from './view/components/Modal';
import Games from './view/pages/Games';
import Main from './view/pages/Main';
import Stat from './view/pages/Stat';
import Tutorial from './view/pages/Tutorial';

const appView = <HTMLDivElement>document.querySelector('#appView');

Menu({
  target: <HTMLHeadElement>document.querySelector('.header'),
  changeView: (e) => {
    appView.innerHTML = '';
    switch ((<HTMLLIElement>e.currentTarget).dataset.view) {
      case 'main':
        Main({ target: appView });
        break;
      case 'tutorial':
        Tutorial({ target: appView });
        break;
      case 'games':
        Games({ target: appView });
        break;
      case 'stat':
        Stat({ target: appView });
        break;
      default:
        Main({ target: appView });
    }
  },
});

Modal({
  target: <HTMLDivElement>document.querySelector('.main'),
});

Main({ target: appView });
