export default class Card {
  constructor(id, name, url, game) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.element;
    this.game = game;
  }

  create() {
    this.element = document.getElementById(this.id);
    console.log('this.element', this.element);

    this.element.addEventListener('click', this.handleClick);
  }

  handleClick = () => {
    this.element.innerText = this.name;
    this.element.style.backgroundImage = `url(${this.url})`;
    this.element.removeEventListener('click', this.handleClick);

    if (this.game.lastTwo.length < 3) {
      this.game.lastTwo.push({ name: this.name, element: this.element });
    }

    if (this.game.isMatch()) {
      console.log('Game.lastTwo[0].element', this.game.lastTwo[0].element);
      console.log('Game.lastTwo[1].element', this.game.lastTwo[1].element);
      this.game.lastTwo = [];
    }

    if (this.game.lastTwo.length == 3 && !this.game.isMatch()) {
      console.log('Three');
      this.game.lastTwo[0].element.style.backgroundImage = `url("")`;
      this.game.lastTwo[1].element.style.backgroundImage = `url("")`;

      this.game.lastTwo = [];
    }
  };
}
