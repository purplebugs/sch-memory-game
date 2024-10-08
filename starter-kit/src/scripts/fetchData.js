import { default as Card } from './card';
import { default as Game } from './game';

const fetchData = async () => {
  const res = await fetch('http://localhost:3002/api/cards');
  const data = await res.json();
  return data;
};

const renderData = async (data) => {
  console.log(data);
};

const startGame = (cards) => {
  const game = new Game(cards);
  console.log('game', game);
};

// TODO add test for populateCards()
const populateCards = (cards) => {
  const card_0 = new Card(`card_0`, cards[0].name, cards[0].url);
  card_0.create();
  console.log('card_0', card_0);
  const card_1 = new Card(`card_1`, cards[1].name, cards[1].url);
  card_1.create();
};

const init = async () => {
  const data = await fetchData();
  renderData(data);
  startGame(data);
  populateCards(data.items);
};

init();
