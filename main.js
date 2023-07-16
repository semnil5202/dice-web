const diceModeSixBtn = document.querySelector('button.mode-six');
const diceModeTwelveBtn = document.querySelector('button.mode-twelve');
const startingGameBtn = document.querySelector('button.starting-game');
const diceImg = document.querySelector('img');
const result = document.querySelector('h2');

const isKakao = Boolean(navigator.userAgent.match('KAKAO'));

let mode = 6;
const syncs =
  (!isKakao && JSON.parse(localStorage.getItem('textDelay'))) ||
  new Array(12).fill(false);

diceModeSixBtn.addEventListener('click', () => {
  mode = 6;
  diceImg.src = './diceInit.svg';
  result.innerHTML = '최대값이 6으로 설정되었습니다.';
});

diceModeTwelveBtn.addEventListener('click', () => {
  mode = 12;
  diceImg.src = './diceInit.svg';
  result.innerHTML = '최대값이 12으로 설정되었습니다.';
});

startingGameBtn.addEventListener('click', () => {
  const diceNumber = Math.floor(Math.random() * mode + 1);
  let textDelay = 750;

  diceImg.src = `./diceInit.svg`;
  result.innerHTML = '';

  const diceTimerId = setTimeout(() => {
    diceImg.src = `./dice${diceNumber}.svg`;
    clearTimeout(diceTimerId);
  }, 500);

  if (syncs[diceNumber - 1]) textDelay = 500;

  const resultTimerId = setTimeout(() => {
    result.innerHTML = diceNumber;
    clearTimeout(resultTimerId);
  }, textDelay);

  syncs[diceNumber - 1] = true;

  !isKakao && localStorage.setItem('textDelay', JSON.stringify(syncs));
});
