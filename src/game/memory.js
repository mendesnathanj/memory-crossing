import Board from './board';
import $ from 'jquery';

class Memory {
  constructor(root) {
    this.root = root;
    this.board = new Board(5);
  }

  render() {
    const container = document.createElement('div');
    container.classList.add('memory-game');
    container.appendChild(this.board.html());
    this.root.appendChild(container);
  }

  start() {
    console.log('starting new game');
    this.render();
  }
}


export default Memory;
