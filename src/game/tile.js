import { importAll } from '../utils/utils';
import Leaf from '../assets/imgs/leaf2.png';

const images = importAll(
  require.context("../assets/imgs/villagers", false, /\.(png|jpe?g|svg)$/)
);

console.log(images);

class Tile {
  constructor(value, color, size) {

    this.value = value;
    this.color = color;
    this.size = size;
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
    img.setAttribute('data-villager', images['kk-slider-og.jpg'].default);

    tile.appendChild(img);
    container.appendChild(tile);

    return container;
  }
}


export default Tile;
