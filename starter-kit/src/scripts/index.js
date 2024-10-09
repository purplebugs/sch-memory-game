import '../styles/index.scss';
import { fetchData } from './fetchData.js';

import { default as Game } from './game';

const init = async () => {
  const data = await fetchData();
  const game = new Game(data);
  console.log('game', game);
};

init();
