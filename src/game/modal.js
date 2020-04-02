import { createElementFromHTML } from '../utils/utils';

class Modal {
  constructor(isIntro = false) {
    this.isIntro = isIntro;
  }

  html() {
    const container = document.createElement('div');
    if (this.isIntro) container.id = 'welcome-modal-container';
    else container.id = 'modal-container';
    container.classList.add('modal-container');

    const modal = document.createElement('div');
    if (this.isIntro) modal.id = 'welcome-modal';
    else modal.id = 'modal';
    modal.classList.add('modal');

    const content = document.createElement('div');
    content.classList.add('modal-content');

    const close = createElementFromHTML('<i id="modal-close" class="modal-close fas fa-times"></i>');
    close.addEventListener('click', () => container.classList.toggle('open'));

    content.appendChild(close);

    const header = document.createElement('h1');
    if (this.isIntro) header.innerText = 'Welcome to Memory Crossing!';
    else header.innerText = 'How to Play';
    content.appendChild(header);

    const p1 = document.createElement('p');
    p1.innerText = "Flip cards over by clicking on them two at a time.\nIf those cards are a pair, then you will earn bells (points) and they will stay up. If not, then they will go back down.\nKeep flipping until you find all the matching pairs before time runs out!";

    content.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerText = "Earn bonus points by flipping matching pairs over consecutively.\nYour score will skyrocket the higher your streak goes!";

    content.appendChild(p2);

    modal.appendChild(content);
    container.appendChild(modal);
    return container;
  }
}


export default Modal;
