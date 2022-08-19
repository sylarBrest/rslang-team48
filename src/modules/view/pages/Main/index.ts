import renderModal from '../../components/Modal';

const renderMain = () => `
  <section class="container section">
    <h2>Главная</h2>
    <div class="tutorial__header">
      <div class="tutorial__toolbar"></div>
    </div>
    <div class="tutorial__body">
      <div class="words"></div>
    </div>
    <div class="tutorial__footer">
    </div>
  </section>
  ${renderModal()}
`;

export default renderMain;
