import { default as Game } from './game';

export default class Card {
  constructor(id, name, url) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.element;
  }

  create() {
    this.element = document.getElementById(this.id);
    console.log('this.element', this.element);

    this.element.addEventListener('click', (event) => {
      this.handleClick();
    });
  }

  handleClick() {
    this.element.innerText = this.name;
    this.element.style.backgroundImage = `url(${this.url})`;

    if (Game.lastTwo.length == 2) {
      console.log('lastTwo.length', Game.lastTwo.length);
      Game.lastTwo.shift();
    }

    if (Game.lastTwo.length < 2) {
      Game.lastTwo.push(this.name);
    }

    console.log('lastTwo', Game.lastTwo);

    Game.isMatch();
  }
}
