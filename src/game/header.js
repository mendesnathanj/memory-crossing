import Bg from '../assets/imgs/bgs/header.png';

class Header {
  constructor() {
  }

  html() {
    const container = document.createElement('div');
    container.classList.add('header');

    const img = new Image();
    img.src = Bg;
    img.classList.add('responsive-img');

    container.appendChild(img);

    return container;
  }
}

export default Header;
