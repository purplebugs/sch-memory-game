export default class Card {
  constructor(id, name, url, game) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.element;
    this.game = game;
    this.showing = false;
  }

  static lastIdSelected = null;

  create() {
    // Create card DIV eg <div class="card" id="card_1">?</div>
    const cardDivElement = document.createElement('div');
    const newContent = document.createTextNode('?');
    cardDivElement.appendChild(newContent);
    cardDivElement.classList.add('card');
    cardDivElement.setAttribute('id', `${this.id}`);

    // Add card DIV to parent
    this.game.element.appendChild(cardDivElement);

    this.element = cardDivElement;
    console.log('this.element', this.element);

    this.element.addEventListener('click', this.handleClick);
  }

  handleClick = () => {
    if (this.id == Card.lastIdSelected) {
      console.log('Clicked on same element, ignore');
      return;
    }

    if (this.showing) {
      console.log('Card already showing, ignore');
      return;
    }

    this.element.innerText = this.name;
    this.element.style.backgroundImage = `url(${this.url})`;
    this.showing = true;

    if (this.game.recentlySelected.length < 3) {
      this.game.recentlySelected.push({ card: this, name: this.name, element: this.element });
    }

    if (this.game.isMatch()) {
      this.game.recentlySelected = [];
    }

    if (this.game.recentlySelected.length == 3 && !this.game.isMatch()) {
      console.log('Three');

      // Reset
      this.game.recentlySelected[0].element.style.backgroundImage = `url("")`;
      this.game.recentlySelected[1].element.style.backgroundImage = `url("")`;

      this.game.recentlySelected[0].card.showing = false;
      this.game.recentlySelected[1].card.showing = false;

      this.game.recentlySelected[0].element.innerText = '?';
      this.game.recentlySelected[1].element.innerText = '?';

      // Remove first two items
      this.game.recentlySelected.shift();
      this.game.recentlySelected.shift();
      console.log('Three this.game.recentlySelected', this.game.recentlySelected);
    }

    Card.lastIdSelected = this.id;
  };
}
