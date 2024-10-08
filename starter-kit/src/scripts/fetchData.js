import { default as Game } from './game';

const fetchData = async () => {
  const res = await fetch('http://localhost:3002/api/cards');
  const data = await res.json();
  return data;
};

const init = async () => {
  const data = await fetchData();
  const game = new Game(data);
  console.log('game', game);
};

init();
