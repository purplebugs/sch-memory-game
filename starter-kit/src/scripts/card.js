export default class Card {
  constructor(id, name, url, game) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.element;
    this.game = game;
    this.showing = false;
  }

  create() {
    // Create card DIV eg <div class="card">?</div>
    this.element = document.createElement('div');
    const newContent = document.createTextNode('?');
    this.element.appendChild(newContent);
    this.element.classList.add('card');

    // Add card DIV to parent
    this.game.element.appendChild(this.element);

    this.element.addEventListener('click', this.handleClick);
  }

  handleClick = () => {
    if (this.game.sleepingAfterMatch) {
      return;
    }

    if (this.showing) {
      console.log('Card already showing, ignore');
      return;
    }

    this.element.innerText = this.name;
    this.element.style.backgroundImage = `url(${this.url})`;
    this.showing = true;

    if (this.game.recentlySelected.length < 2) {
      this.game.recentlySelected.push({ card: this, name: this.name, element: this.element });
    }

    if (this.game.isMatch()) {
      console.log('isMatch!');
      this.game.recentlySelected = [];
    }

    if (this.game.recentlySelected.length == 2 && !this.game.isMatch()) {
      console.log('Two - not a match');
      this.game.sleepingAfterMatch = true;

      // Set timeout before reset
      setTimeout(() => {
        // Reset
        this.game.recentlySelected[0].element.style.backgroundImage = `url("")`;
        this.game.recentlySelected[1].element.style.backgroundImage = `url("")`;

        this.game.recentlySelected[0].card.showing = false;
        this.game.recentlySelected[1].card.showing = false;

        this.game.recentlySelected[0].element.innerText = '?';
        this.game.recentlySelected[1].element.innerText = '?';

        this.game.recentlySelected = [];
        this.game.sleepingAfterMatch = false;
      }, 3000);
    }
  };
}
