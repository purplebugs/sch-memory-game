import '../styles/index.scss';
import { fetchData } from './fetchData.js';

import Game from './game';

const init = async () => {
  try {
    const data = await fetchData();

    const game = new Game(data);
    console.log('game', game);
  } catch (error) {
    window.alert('🧨 ERROR: Game could not start');
  }
};

window.addEventListener('load', (event) => {
  init();
  console.log('page is fully loaded');
});
