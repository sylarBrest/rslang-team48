import renderFooter from '../components/Footer';
import renderHeader from '../components/Header';
import renderMain from '../pages/Main';

const renderLayout = () => {
  const root = <HTMLElement>document.querySelector('#root');

  root.innerHTML = `
    ${renderHeader()}
    <main class="main">
      ${renderMain()}
    </main>  
    ${renderFooter()}
  `;
};

export default renderLayout;
