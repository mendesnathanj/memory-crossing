import Memory from './memory';
import Header from './header';
import { formattedTime } from '../utils/utils';
import levelData from './level_data.js';
import Modal from './modal';


class GameManager {
  constructor(root) {
    this.root = root;
    this.level = 1;
    this.streakCounter = null;
    this.header = new Header(this.level, levelData[this.level].time);
    this.game = new Memory(this.level, levelData[this.level], this);
    this.updateLevel = this.updateLevel.bind(this);
  }

  updateLevel(num, currentScore) {
    const increment = this.level < num;
    this.level = num < 1 ? 1 : num;

    this.game = new Memory(this.level, levelData[this.level], this, currentScore);
    this.updateHeaderLevel(increment);
    this.resetStreak();
    this.updateTimerText();
    this.root.removeChild(document.querySelector('#memory-game'));
    this.root.appendChild(this.game.html());
  }

  updateHeaderLevel(increment) {
    if (increment) this.header.incrementLevel();
    else this.header.decrementLevel();
  }

  updateTimerText() {
    const timer = document.querySelector('#timer');
    timer.innerText = formattedTime(levelData[this.level].time)
  }

  updateScore(score) {
    this.header.updateScore(score);
  }

  updateStreak(num) {
    this.header.updateStreak(num);
  }

  resetStreak() {
    this.header.resetStreak();
  }

  render() {
    this.root.appendChild(new Modal(true).html());
    document.querySelector('#welcome-modal-container').classList.add('open');

    this.root.appendChild(new Modal().html());
    this.root.appendChild(this.header.html());
    this.root.appendChild(this.game.html());
  }
}


export default GameManager;
