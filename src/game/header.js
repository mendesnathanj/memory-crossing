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


    const content = document.createElement('div');
    content.classList.add('header-content');

    
    container.appendChild(img);
    container.appendChild(content);
    return container;
  }
}

export default Header;
