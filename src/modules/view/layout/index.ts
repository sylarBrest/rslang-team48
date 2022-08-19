import renderFooter from '../components/Footer';
import renderHeader from '../components/Header';
import renderMain from '../pages/Main';

const renderLayout = () => {
  const root = <HTMLElement>document.querySelector('#root');

  root.innerHTML = `
    ${renderHeader()}
    ${renderMain()}
    ${renderFooter()}
  `;
};

export default renderLayout;
