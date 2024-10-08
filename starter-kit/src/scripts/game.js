export default class Game {
  constructor(cards) {
    this.cards = cards?.items;
    this.total = cards?.total;
    this.totalPairs = cards?.totalPairs;
    this.lastTwo = [];
  }

  // TODO If last two cards clicked match:
  // 1. keep cards facing up (remove click event)
  // 2. Show "YES" on scoreboard
  // 3. Show number of matches on scoreboard

  // TODO If all cards facing up:
  // 1. Show on scoreboard "YOU WIN - Refresh page to start again"

  // TODO If last two cards clicked do not match:
  // 1. turn both back over (remove bg img)
}
