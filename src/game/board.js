import Tile from './tile';
import { importAll } from "../utils/utils";
import { shuffle, randomVillager } from '../utils/utils';

const images = importAll(
  require.context("../assets/imgs/villagers", false, /\.(png|jpe?g|svg)$/)
);

class Board {
  constructor(size) {
    this.size = size;


    this.tiles = this.newTileset(size);
  }

  newTileset(size) {
    const temp = [];
    const villagers = Object.assign({}, images);

    for (let i = 0; i < (size * size) / 2; i++) {
      const villager = randomVillager(villagers);
      delete villagers[villager.key];
      const tile = new Tile(villager);
      temp.push(tile);
      temp.push(tile);
    }

    shuffle(temp);

    const tiles = [];
    let idx = 0;
    for (let i = 0; i < size; i++) {
      const row = [];

      for (let j = 0; j < size; j++) {
        row.push(temp[idx]);
        idx++;
      }

      tiles.push(row);
    }

    return tiles;
  }

  html() {
    const container = document.createElement('div');
    container.classList.add('board');
    container.addEventListener('click', ({ target }) => {
      if (!target.classList.contains('tile-img')) return;
      if (target.classList.contains('flipped')) return;

      target.classList.toggle("scale");
      target.classList.toggle("flipped");
      target.src = target.getAttribute('data-villager');
      setTimeout(() => target.classList.toggle("scale"), 200);
    });

    this.tiles.forEach(row => {
      const newRow = document.createElement('div');
      newRow.classList.add('board-row');
      row.forEach(tile => newRow.appendChild(tile.html()));
      container.appendChild(newRow);
    })


    return container;
  }

  render() {

  }
}


export default Board;
