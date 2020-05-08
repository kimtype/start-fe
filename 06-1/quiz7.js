let timerId = null;
let point = 0;
let life = 10;

const $point = document.querySelector("#point");
const $life = document.querySelector("#life");
const $box = document.querySelector(".box");
const $bug = document.getElementById("bug");
const time = 2000;

function makeNum(max) {
  return Math.floor(Math.random() * max);
}

function show() {
  $bug.style.display = "block";
}

function hide() {
  $bug.style.display = "none";
}

////난수를 만들어서 위치를 바꿔줌
function move() {
  show();
  let x = makeNum(380);
  let y = makeNum(380);

  $bug.style.left = `${x}px`;
  $bug.style.top = `${y}px`;
}

////move를 반복함
function play() {
  timerId = setInterval(move, time);
}

////맞았을 때
function good() {
  point += 1;
  $point.innerText = point;
}

////틀렸을 때
function bad() {
  life -= 1;
  $life.innerText = life;

  if (life === 0) {
    alert("game over");
    clearInterval(timerId);
    return;
  }
}
////bug를 클릭했을 때만 good을 실행하도록 함

function click() {
  let area = event.target.id;
  if (area === "bug") {
    good();
  } else {
    bad();
  }
  hide();
}

play();

$box.addEventListener("click", click);
