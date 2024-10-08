const fetchData = async () => {
  const res = await fetch('http://localhost:3002/api/cards');
  const data = await res.json();
  return data;
};

const renderData = async (data) => {
  console.log(data);
};

// TODO If last two cards clicked match:
// 1. keep cards facing up (remove click event)
// 2. Show "YES" on scoreboard
// 3. Show number of matches on scoreboard

// TODO If all cards facing up:
// 1. Show on scoreboard "YOU WIN - Refresh page to start again"

// TODO If last two cards clicked do not match:
// 1. turn both back over (remove bg img)

// TODO add test for populateCards()
const populateCards = (cards) => {
  const card_0 = document.getElementById('card_0');

  card_0.addEventListener('click', (event) => {
    card_0.innerText = cards[0].name;
    card_0.style.backgroundImage = `url(${cards[0].url})`;
  });

  const card_1 = document.getElementById('card_1');

  card_1.addEventListener('click', (event) => {
    card_1.innerText = cards[1].name;
    card_1.style.backgroundImage = `url(${cards[1].url})`;
  });
};

const init = async () => {
  const data = await fetchData();
  renderData(data);
  populateCards(data.cards);
};

init();
