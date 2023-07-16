const diceModeSixBtn = document.querySelector('button.mode-six');
const diceModeTwelveBtn = document.querySelector('button.mode-twelve');
const startingGameBtn = document.querySelector('button.starting-game');
const diceImg = document.querySelector('img');
const result = document.querySelector('h2');

let mode = 6;

diceModeSixBtn.addEventListener('click', () => {
  mode = 6;
  diceImg.src = './diceInit.svg';

  diceModeSixBtn.classList.add('active');
  diceModeTwelveBtn.classList.remove('active');
});

diceModeTwelveBtn.addEventListener('click', () => {
  mode = 12;
  diceImg.src = './diceInit.svg';

  diceModeSixBtn.classList.remove('active');
  diceModeTwelveBtn.classList.add('active');
});

startingGameBtn.addEventListener('click', () => {
  const diceNumber = Math.floor(Math.random() * mode + 1);

  diceImg.src = `./diceInit.svg`;

  const diceTimerId = setTimeout(() => {
    diceImg.src = `./dice${diceNumber}.svg`;
    clearTimeout(diceTimerId);
  }, 500);
});

diceImg.addEventListener('load', (e) => {
  result.innerHTML = '';
  const diceInfos = e.target.src.match(/([0-9]+)\.svg$/);
  if (diceInfos) result.innerHTML = diceInfos[1];
});
