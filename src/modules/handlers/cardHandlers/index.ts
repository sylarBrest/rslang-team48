import { userDataLocal } from '@store';
import cardClickAudioHandler from './cardClickAudioHandler';
import cardClickHandler from './cardClickHandler';
import cardClickHardHandler from './cardClickHardHandler';
import cardClickKnownHandler from './cardClickKnownHandler';
import cardHoverHandler from './cardHoverHandler';

const initCardHandlers = () => {
  cardClickHandler();

  if (userDataLocal) {
    cardHoverHandler();
    cardClickHardHandler();
    cardClickKnownHandler();
  }

  cardClickAudioHandler();
};

export default initCardHandlers;
