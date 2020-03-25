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
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
