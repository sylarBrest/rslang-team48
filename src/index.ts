import './index.scss';

import Menu from './view/components/Menu';
import Modal from './view/components/Modal';
import Tutorial from './view/pages/Tutorial';

Menu({
  target: <HTMLHeadElement>document.querySelector('.header'),
  changeView: (e) => { console.log(e.target) },
});

Modal({
  target: <HTMLDivElement>document.querySelector('.main'),
})

Tutorial({
  target: <HTMLDivElement>document.querySelector('#appView'),
});
