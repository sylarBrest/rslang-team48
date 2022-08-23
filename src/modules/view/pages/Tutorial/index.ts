// import { HOST } from '../../../services/constants';
import getWords from '../../../services/words/getWords';
import { EStatusCode, TWordContent } from '../../../types';
import Card from '../../components/Card';

import './style.scss';

const renderTutorial = async () => {
  const response = await getWords();
  let content = '';
  if (response.status === EStatusCode.OK) {
    const words: TWordContent[] = await response.json();
    content = words
      .map(Card)
      .reduce((acc, item) => `${acc}${item}`, '');
  }

  const template = `
    <section class="tutorial section container">
      ${content}
    </section>
  `;
  return template;
};

export default renderTutorial;
