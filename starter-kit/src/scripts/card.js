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
      this.element.innerText = this.name;
      this.element.style.backgroundImage = `url(${this.url})`;
    });
  }
}
