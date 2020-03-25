import CardBg from '../assets/imgs/card-facedown.png';

class Tile {
  constructor({ name, src }) {

    this.name = name;
    this.src = src;
    this.found = false;
  }

  html() {
    const container = document.createElement('div');
    container.classList.add('tile-container');

    const tile = document.createElement('div');
    tile.classList.add('tile');

    container.appendChild(tile);

    const img = new Image();
    img.classList.add('responsive-img');
    img.classList.add('tile-img');
    img.src = CardBg;
    img.setAttribute('data-villager-src', this.src);
    img.setAttribute('data-villager-name', this.name);
    tile.appendChild(img);
    container.appendChild(tile);


    return container;
  }
}


export default Tile;
