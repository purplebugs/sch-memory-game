import { default as Card } from './card';

export default class Game {
  constructor(cards) {
    this.cards = cards?.items;
    this.total = cards?.total;
    this.totalPairs = cards?.totalPairs;

    this.recentlySelected = [];
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
    if (this.recentlySelected.length < 2) {
      return false;
    }

    const lastTwo = this.recentlySelected.slice(-2);
    const isMatch = lastTwo[0]?.name == lastTwo[1]?.name;
    console.log('isMatch', isMatch);

    // TODO If last two cards clicked match:
    // - Show "YES" on scoreboard
    // - Show number of matches on scoreboard

    return isMatch;
  }

  // TODO If all cards facing up:
  // - Show on scoreboard "YOU WIN - Refresh page to start again"
}
