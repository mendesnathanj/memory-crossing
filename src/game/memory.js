import Board from './board';

class Memory {
  constructor(levelNum, levelData, gameManager, score = 0) {
    this.level = levelNum;
    this.gameManager = gameManager;
    this.board = new Board(levelNum, levelData.tileNum, levelData.time, gameManager, score);
  }

  html() {
    const container = document.createElement("div");
    container.id = 'memory-game';
    container.classList.add("memory-game");
    container.appendChild(this.board.html());

    return container;
  }
}


export default Memory;
