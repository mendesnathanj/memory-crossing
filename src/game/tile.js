import Leaf from '../assets/imgs/kk-slider-og.jpg';

class Tile {
  constructor(value, color, size) {
    this.value = value;
    this.color = color;
    this.size = size;
  }

  html() {
    const container = document.createElement('div');
    container.classList.add('tile-container');
    container.classList.add(`tile-${this.size}`);

    // const tile = document.createElement('div');
    // tile.classList.add('tile');

    const leaf = new Image();
    leaf.src = Leaf;
    leaf.classList.add('responsive-img');
    leaf.classList.add('tile');

    container.appendChild(leaf);

    // container.appendChild(tile);

    return container;
  }

  render() {

  }
}


export default Tile;
