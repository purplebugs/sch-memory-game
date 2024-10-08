import { default as Card } from './card';

export default class Game {
  constructor(cards) {
    this.cards = cards?.items;
    this.total = cards?.total;
    this.totalPairs = cards?.totalPairs;

    this.lastTwo = [];
    this.populateCards(this.cards);
  }

  populateCards() {
    // TODO add test for populateCards()

    console.log('this.cards', this.cards);
    this.cards.forEach((card, i) => {
      const item = new Card(`card_${i}`, card.name, card.url, this);
      item.create();
    });
  }

  isMatch() {
    if (this.lastTwo.length < 2) {
      return false;
    }

    const isMatch = this.lastTwo[0]?.name == this.lastTwo[1]?.name;
    console.log('isMatch', isMatch);

    // TODO If last two cards clicked match:
    // 1. keep cards facing up (remove click event)
    // 2. Show "YES" on scoreboard
    // 3. Show number of matches on scoreboard

    // TODO If last two cards clicked do not match:
    // 1. turn both back over (remove bg img)
    return isMatch;
  }

  // TODO If all cards facing up:
  // 1. Show on scoreboard "YOU WIN - Refresh page to start again"
}
