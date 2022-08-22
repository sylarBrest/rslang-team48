import initHandlers from '@handlers';
import renderLayout from '@view/layout';

const app = () => {
  renderLayout();
  initHandlers();
};

export default app;
