const $box = document.getElementById('box');
const $btn = document.querySelector('#btn');
let min = null;
let max = null;
let num = null;
let innerNum = 0;

//박스 스타일 적용
$box.setAttribute(
  'style',
  'border:10px solid gray; width : 130px; height : 35px; text-align:center; padding:10px;',
);
//min max 얻기
function getValue() {
  min = document.getElementById('min').value;
  max = document.getElementById('max').value;
}
//난수 생성
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
}
//box 안의 숫자 바꾸기
function play() {
  const timerId = setInterval(() => {
    if (innerNum === num) {
      clearInterval(timerId);
      $btn.disabled = false;
    } else if (innerNum < num) {
      innerNum += 1;
    } else if (innerNum > num) {
      innerNum -= 1;
    }
    $box.innerText = innerNum;
  });
}
function start() {
  $btn.disabled = true;
  getValue();
  num = randomNum(min, max);
  play();
}

$btn.addEventListener('click', start);
