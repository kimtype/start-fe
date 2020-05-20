const $btn = document.querySelector('#btn');
const $url = document.querySelector('#url');
const $log = document.querySelector('#log');

// 결과 print
function print(text) {
  $log.value = text;
}

//fetch하기
function fetching(url) {
  fetch(url)
    .then(function (response) {
      response.text().then(print);
    })
    .catch(function (error) {
      print(error);
    });
}

//클릭했을 때, url을 가져오고 fetch실행
function click() {
  let url = $url.value;
  if (!url) {
    window.alert('url을 입력하세요');
  } else fetching(url);
}

//엔터, 클릭 시 click이벤트 실행
$btn.addEventListener('click', click);
$url.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) click();
});
