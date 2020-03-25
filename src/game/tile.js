import { importAll } from '../utils/utils';
import Leaf from '../assets/imgs/leaf2.png';
import Villager from "../assets/imgs/kk-slider-og.jpg";

const images = importAll(
  require.context("../assets/imgs", false, /\.(png|jpe?g|svg)$/)
);

console.log(images);

class Tile {
  constructor(value, color, size) {

    this.value = value;
    this.color = color;
    this.size = size;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.target.classList.add('kk-slider');
    e.target.classList.remove('tile-bg');
    // e.target.classList.toggle('scale');

    // setTimeout(() => {
    //   e.target.classList.toggle('scale');
    // }, 250);
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
    img.classList.add('tile-bg');
    img.addEventListener('click', e => this.handleClick(e));
    // img.classList.add('no-opacity');

    tile.appendChild(img);
    container.appendChild(tile);
    return container;
  }

  render() {

  }
}


export default Tile;
