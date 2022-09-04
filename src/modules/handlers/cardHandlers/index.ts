import { userDataLocal } from '@store';
import cardClickAudioHandler from './cardClickAudioHandler';
import cardClickHandler from './cardClickHandler';
import cardHoverHandler from './cardHoverHandler';

const initCardHandlers = () => {
  cardClickHandler();

  if (userDataLocal) {
    cardHoverHandler();
  }

  cardClickAudioHandler();
};

export default initCardHandlers;
