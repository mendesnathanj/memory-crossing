import './assets/css/_memory_crossing.scss';
import Memory from './game/memory';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');

  const memory = new Memory(root);

  memory.start();
});



// document.body.appendChild(component());
