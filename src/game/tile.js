import Leaf from '../assets/imgs/leaf.png';
import Villager from '../assets/imgs/kk-slider-og.jpg';

class Tile {
  constructor(value, color, size) {
    this.value = value;
    this.color = color;
    this.size = size;
  }

  html() {
    const container = document.createElement('div');
    container.classList.add('tile-container');
    container.classList.add('flip-box');

    const inner = document.createElement('div');
    inner.classList.add("flip-box-inner");

    const front = document.createElement('div');
    front.classList.add('flip-box-front');

    const leaf = new Image();
    leaf.src = Leaf;
    leaf.classList.add("responsive-img");
    leaf.classList.add("tile");
    leaf.classList.add("back-card");

    front.appendChild(leaf);

    const back = document.createElement('div');
    back.classList.add('flip-box-back');

    const villager = new Image();
    villager.src = Villager;
    villager.classList.add('responsive-img');
    villager.classList.add('tile');
    leaf.classList.add("front-card");

    back.appendChild(villager);

    inner.appendChild(front);
    inner.appendChild(back);
    // container.classList.add(`tile-${this.size}`);

    // const tile = document.createElement('div');
    // tile.classList.add('tile');



    container.appendChild(inner);

    // container.appendChild(tile);

    return container;
  }

  render() {

  }
}


export default Tile;
