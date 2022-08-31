import cardClickAudioHandler from './cardClickAudioHandler';
import cardClickHandler from './cardClickHandler';
import cardHoverHandler from './cardHoverHandler';

const initCardHandlers = () => {
  cardClickHandler();
  cardHoverHandler();
  cardClickAudioHandler();
};

export default initCardHandlers;
