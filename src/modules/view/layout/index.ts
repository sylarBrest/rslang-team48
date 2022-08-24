import renderFooter from '../components/Footer';
import renderHeader from '../components/Header';
import renderHome from '../pages/Home';

const renderLayout = () => {
  const root = <HTMLElement>document.querySelector('#root');

  root.innerHTML = `
    ${renderHeader()}
    <main class="main">
      ${renderHome()}
    </main>  
    ${renderFooter()}
  `;
};

export default renderLayout;
