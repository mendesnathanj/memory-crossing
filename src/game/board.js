import Tile from './tile';
import { shuffle, randomColor } from '../utils/utils';

class Board {
  constructor(size) {
    this.size = size;


    this.tiles = this.newTileset(size);
  }

  newTileset(size) {
    const temp = [];

    for (let i = 0; i < (size * size) / 2; i++) {
      const color = randomColor();
      const tile = new Tile(i, color, size);
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
    // container.addEventListener('click', e => {
    //   console.log(e.target);
    // });

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
