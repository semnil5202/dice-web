const diceModeSixBtn = document.querySelector('button.mode-six');
const diceModeTwelveBtn = document.querySelector('button.mode-twelve');
const startingGame = document.querySelector('button.starting-game');
const diceImg = document.querySelector('img');
const result = document.querySelector('h2');

let mode = 6;

diceModeSixBtn.addEventListener('click', () => {
  mode = 6;
  diceImg.src = './Juinit.png';
  result.innerHTML = '최대값이 6으로 설정되었습니다.';
});

diceModeTwelveBtn.addEventListener('click', () => {
  mode = 12;
  diceImg.src = './Juinit.png';
  result.innerHTML = '최대값이 12으로 설정되었습니다.';
});

startingGame.addEventListener('click', () => {
  const diceNumber = Math.floor(Math.random() * mode + 1);

  diceImg.src = `./Juinit.png`;
  result.innerHTML = '';

  const timerId = setTimeout(() => {
    diceImg.src = `./ju${diceNumber}.png`;
    result.innerHTML = diceNumber;
    clearTimeout(timerId);
  }, 500);
});
