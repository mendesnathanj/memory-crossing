import Leaf from '../assets/imgs/leaf2.png';

class Tile {
  constructor({ name, src }) {

    this.name = name;
    this.src = src;
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
    img.src = Leaf;
    img.setAttribute('data-villager', this.src);

    tile.appendChild(img);
    container.appendChild(tile);

    return container;
  }
}


export default Tile;
