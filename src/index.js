import './assets/css/_memory_crossing.scss';
import GameManager from './game/game_manager';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  const gameManager = new GameManager(root);
  gameManager.render();
});
