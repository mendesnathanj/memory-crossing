import Board from './board';
import Header from './header';

class Memory {
  constructor(root) {
    this.root = root;
    this.board = new Board(32);
  }

  render() {
    const container = document.createElement('div');
    container.classList.add('memory-game');
    container.appendChild(new Header().html());
    container.appendChild(this.board.html());
    this.root.appendChild(container);
  }

  start() {
    console.log('starting new game');
    this.render();
  }
}


export default Memory;
