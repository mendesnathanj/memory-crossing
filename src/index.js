import './assets/css/_memory_crossing.scss';

function component() {
  const el = document.createElement('div');
  el.innerHTML = 'hewwo world';
  return el;
}

document.body.appendChild(component());
