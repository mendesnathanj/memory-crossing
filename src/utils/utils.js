export const shuffle = arr => {
  let currentIndex = arr.length;
  let tempVal, randIndex;

  while (0 !== currentIndex) {
    randIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    tempVal = arr[currentIndex];
    arr[currentIndex] = arr[randIndex];
    arr[randIndex] = tempVal;
  }

  return arr;
}

export const randomColor = () => (
  '#' + Math.floor(Math.random() * 16777215).toString(16)
);

export const importAll = r => {
  let images = {};
  r.keys().map((item, _) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export const randomVillager = villagers => {
  const keys = Object.keys(villagers);
  const i = Math.round(keys.length * Math.random());
  const key = keys[i];
  const name = key.split('.')[0];
  const src = villagers[keys[i]].default;

  return { name, src, key };
}

export const formattedTime = time => {
  const min = (Math.floor(time / 60)).toString();
  let seconds = (time % 60).toString();

  if (seconds.length < 2) seconds = '0' + seconds;

  return `${min}:${seconds}`;
}

export const formatNumber = num => (
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
)

export const createElementFromHTML = htmlString => {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  return div.firstChild;
}

