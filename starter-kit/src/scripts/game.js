import Card from './card';

export default class Game {
  constructor(cards) {
    this.cards = cards?.items;
    this.total = cards?.total;
    this.totalPairs = cards?.totalPairs;
    this.totalMatches = 0;
    this.recentlySelected = [];
    this.sleepingAfterMatch = false;

    this.element = document.getElementById('game');
    this.populateCards(this.cards);
  }

  populateCards() {
    console.log('this.cards', this.cards);
    this.cards.forEach((card, i) => {
      const item = new Card(`card_${i}`, card.name, card.url, this);
      item.create();
    });
  }

  isMatch() {
    document.getElementById('match').innerText = 'Is it a match?';

    if (this.recentlySelected.length < 2) {
      return false;
    }

    const isMatch = this.recentlySelected[0]?.name === this.recentlySelected[1]?.name;
    console.log('isMatch', isMatch);

    if (isMatch) {
      document.getElementById('match').innerText = 'Is it a match? YES';

      this.totalMatches += 1;
      document.getElementById('totalMatches').innerText = `Total matching pairs: ${this.totalMatches}`;
    }

    if (isMatch && this.totalMatches === this.totalPairs) {
      document.getElementById('result').innerText = `Result: YOU WIN!! Reload to play again`;
    }

    return isMatch;
  }
}
