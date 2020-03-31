import Bg from '../assets/imgs/bgs/header2.png';
import BellBag from '../assets/imgs/misc/bell-bag.png';
import { formattedTime, formatNumber, createElementFromHTML } from '../utils/utils';
import BGMusic from '../assets/sounds/background-music-edited.mp3';
import Modal from './modal';

class Header {
  constructor(level, initialTime, gameManager, score = 0) {
    this.gameManager = gameManager;
    this.score = score;
    this.level = level;
    this.scoreHtml = null;
    this.levelHtml = null;
    this.streakHtml = null;
    this.initialTime = initialTime;
    this.bgMusic = new Audio(BGMusic);
    this.bgMusic.loop = true;
    this.title = 'Memory Crossing!';
  }


  incrementStreak() {
    this.streak++;
    this.streakHtml.innerText = this.streak;
  }

  resetStreak() {
    this.streakHtml.innerText = 0;
  }

  incrementLevel() {
    this.level++;
    console.log(this.level);
    this.levelHtml.innerText = `Level ${this.level}`;
  }

  updateStreak(num) {
    this.streakHtml.innerText = num;
  }

  updateTimerText(time) {
    this.timerHtml.innerHTML = formattedTime(time);
  }

  decrementLevel() {
    if (this.level > 1) this.level--;
    this.levelHtml.innerText = `Level ${this.level}`;
  }

  updateScore(score) {
    this.score = score;
    this.scoreHtml.innerText = formatNumber(score);
  }

  html() {
    const container = document.createElement('div');
    container.classList.add('header');

    const img = new Image();
    img.src = Bg;
    img.classList.add('responsive-img');
    img.classList.add('header-bg');

    const content = document.createElement('div');
    content.classList.add('header-content');

    const upperRow = document.createElement('div');
    upperRow.classList.add('header-row');
    upperRow.classList.add('upper-row');

    const timer = document.createElement('div');
    timer.id = 'timer';
    timer.classList.add('timer');
    timer.innerText = formattedTime(this.initialTime);
    upperRow.appendChild(timer);

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText = this.title;
    upperRow.appendChild(title);

    const helpContainer = document.createElement('div');
    const musicIcon = createElementFromHTML('<i class="header-music fas fa-microphone-alt-slash"></i>');

    musicIcon.addEventListener('click', () => {
      musicIcon.classList.toggle('fa-microphone-alt-slash');
      musicIcon.classList.toggle('fa-microphone-alt');

      if (this.bgMusic.paused) this.bgMusic.play();
      else this.bgMusic.pause();
    });

    helpContainer.appendChild(musicIcon);

    const helpIcon = createElementFromHTML('<i class="header-question fas fa-question-circle"></i>');
    helpContainer.appendChild(helpIcon);
    helpIcon.addEventListener('click', () => document.querySelector('#modal-container').classList.toggle('open'));

    upperRow.appendChild(helpContainer);

    content.appendChild(upperRow);

    const lowerRow = document.createElement('div');
    lowerRow.classList.add('header-row');

    const level = document.createElement('div');
    level.id = 'level';
    level.classList.add('level');
    level.innerText = `Level ${this.level}`;
    lowerRow.appendChild(level);
    this.levelHtml = level;

    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('score');

    const bagContainer = document.createElement('span');
    bagContainer.classList.add('bag-container');

    const bellBag = new Image();
    bellBag.src = BellBag;
    bellBag.classList.add('bell-bag');

    bagContainer.appendChild(bellBag);
    scoreContainer.appendChild(bagContainer);

    const score = document.createElement('span');
    score.id = "score";
    score.innerText = '0';
    scoreContainer.appendChild(score);
    lowerRow.appendChild(scoreContainer);
    this.scoreHtml = score;

    const streakContainer = document.createElement('div');
    streakContainer.classList.add('streak-container');

    const streak = document.createElement('span');
    streak.id = 'streak';
    streak.classList.add('streak');
    streak.innerText = '0';
    streakContainer.appendChild(streak);
    this.streakHtml = streak;

    const streakIconContainer = document.createElement('span');
    streakIconContainer.classList.add('streak-icon-container');
    streakIconContainer.innerHTML = '<i class="streak-icon fas fa-fire-alt"></i>';

    streakContainer.appendChild(streakIconContainer);

    lowerRow.appendChild(streakContainer);

    content.appendChild(lowerRow);

    container.appendChild(img);
    container.appendChild(content);
    return container;
  }
}

export default Header;
