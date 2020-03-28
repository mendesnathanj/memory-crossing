import Tile from './tile';
import { shuffle, randomVillager, formattedTime } from '../utils/utils';
import CardBg from "../assets/imgs/card-facedown.png";
import { importAll } from "../utils/utils";
import SuccessSound from '../assets/sounds/success.mp3';

let images = importAll(
  require.context("../assets/imgs/villagers", false, /\.(png|jpe?g|svg)$/)
);

while (Object.keys(images).length === 0)
  images = importAll(
    require.context("../assets/imgs/villagers", false, /\.(png|jpe?g|svg)$/)
  );

class Board {
  constructor(levelNum, tileNum, time, gameManager, score = 0) {
    this.size = tileNum;
    this.tilesThisTurn = [];
    this.score = score;
    this.flippedCount = 0;
    this.firstClick = true;
    this.time = time;
    this.streak = 0;
    this.gameOver = false;
    this.timerInterval = null;
    this.levelNum = levelNum;
    this.gameManager = gameManager;
    this.successSound = new Audio(SuccessSound);
    this.tiles = this.newTileset(tileNum);
  }

  newTileset(size) {
    const temp = [];
    const villagers = Object.assign({}, images);

    for (let i = 0; i < size / 2; i++) {
      const villager = randomVillager(villagers);
      delete villagers[villager.key];
      const tile = new Tile(villager);
      temp.push(tile);
      temp.push(tile);
    }

    shuffle(temp);
    return temp.slice(0, size);
  }

  scale(el) {
    el.classList.toggle("scale");
    setTimeout(() => el.classList.toggle("scale"), 200);
  }

  shake(el) {
    el.classList.toggle('shake');
    setTimeout(() => el.classList.toggle('shake'), 500);
  }

  calculateScore() {
    return this.score + 1000 + this.streak ** 10;
  }

  html() {
    const container = document.createElement('div');
    container.classList.add('board');

    container.addEventListener('click', ({ target }) => {
      if (this.gameOver) return;
      if (!target.classList.contains('tile-img')) return;
      if (target.classList.contains('flipped')) return;
      if (this.tilesThisTurn.length === 2) return;

      if (this.firstClick) {
        const timer = document.querySelector("#timer");
        this.firstClick = false;
        this.timerInterval = setInterval(() => {
          this.time -= 1;
          timer.innerText = formattedTime(this.time);

          if (this.time === 0) {
            timer.innerText = formattedTime(this.time);
            this.gameManager.updateScore(0);
            this.gameManager.resetStreak();
            clearInterval(this.timerInterval);
            console.log('You lose!');
            this.gameOver = true;
            this.gameManager.updateLevel(--this.levelNum);
          }
        }, 975)
      }

      target.src = target.getAttribute("data-villager-src");
      this.scale(target);
      target.classList.toggle("flipped");

      this.tilesThisTurn.push(target);
      if (this.tilesThisTurn.length === 2) {
        const names = this.tilesThisTurn.map(tile => tile.getAttribute('data-villager-name'));
        if (names[0] === names[1]) {

          this.successSound.play();
          this.scale(this.tilesThisTurn[0]);
          this.streak++;
          this.score = this.calculateScore();
          this.gameManager.updateScore(this.score);
          this.flippedCount += 2;
          this.gameManager.updateStreak(this.streak);
          if (this.flippedCount === this.size) {
            console.log('You win!');
            clearInterval(this.timerInterval);
            setTimeout(() => this.gameManager.updateLevel(++this.levelNum, this.score), 1000);
          }
          this.tilesThisTurn = [];
        } else {
          this.tilesThisTurn.forEach(tile => this.shake(tile));
          this.streak = 0;
          this.gameManager.resetStreak();
          setTimeout(() => {
            this.tilesThisTurn.forEach(tile => {
              tile.src = CardBg;
              tile.classList.toggle("flipped");
            });
            this.tilesThisTurn = [];
          }, 650);
        }
      }
    });


    if (this.size === 16) {
      let idx = 0;
      for (let i = 0; i < 4; i++) {
        const row = document.createElement('div');
        row.classList.add('board-row');

        for (let j = 0; j < 4; j++) {
          row.appendChild(this.tiles[idx].html());
          idx++;
        }
        container.appendChild(row);
      }
    } else {
      this.tiles.forEach(tile => container.appendChild(tile.html()));
    }

    return container;
  }
}


export default Board;
