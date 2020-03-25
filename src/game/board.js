import Tile from './tile';
import { importAll } from "../utils/utils";
import { shuffle, randomVillager } from '../utils/utils';
import Leaf from "../assets/imgs/leaf2.png";

const images = importAll(
  require.context("../assets/imgs/villagers", false, /\.(png|jpe?g|svg)$/)
);

class Board {
  constructor(size) {
    this.size = size;

    this.tilesThisTurn = [];
    window.tilesThisTurn = this.tilesThisTurn;
    this.score = 0;
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

  scale(el) {
    el.classList.toggle("scale");
    setTimeout(() => el.classList.toggle("scale"), 200);
  }

  shake(el) {
    el.classList.toggle('shake');
    setTimeout(() => el.classList.toggle('shake'), 750);
  }

  html() {
    const container = document.createElement('div');
    container.classList.add('board');
    container.addEventListener('click', ({ target }) => {
      if (!target.classList.contains('tile-img')) return;
      if (target.classList.contains('flipped')) return;
      if (this.tilesThisTurn.length === 2) return;

      target.src = target.getAttribute("data-villager-src");
      this.scale(target);
      target.classList.toggle("flipped");

      this.tilesThisTurn.push(target);
      if (this.tilesThisTurn.length === 2) {
        const names = this.tilesThisTurn.map(tile => tile.getAttribute('data-villager-name'));
        if (names[0] === names[1]) {
          // do something
          this.scale(this.tilesThisTurn[0]);
          this.score += 100;
          console.log(this.score);
          this.tilesThisTurn = [];
        } else {
          setTimeout(() => {
            this.tilesThisTurn.forEach(tile => this.shake(tile));
          }, 300);

          setTimeout(() => {
            this.tilesThisTurn.forEach(tile => {
              tile.src = Leaf;
              tile.classList.toggle("flipped");
            });
            this.tilesThisTurn = [];
          }, 1000);
        }
      }
    });

    this.tiles.forEach(row => {
      const newRow = document.createElement('div');
      newRow.classList.add('board-row');
      row.forEach(tile => newRow.appendChild(tile.html()));
      container.appendChild(newRow);
    });

    return container;
  }

  render() {

  }
}


export default Board;
