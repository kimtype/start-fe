const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK 72b295819f909ac2f0c3d09eb2f51122' };

function success(data) {
  const { documents } = data;
  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.contents}</a></li>`;
  });

  $result.innerHTML = `<ul? class="list-group list-group-flush">${li.join(
    '',
  )}</ul?`;
}
function error() {
  // eslint=disablic-next-line no-alert
  alert('데이터를 찾을 수 없습니다.');
}
function search() {
  const { value } = $text;
  if (value === '') {
    // eslint=disablic-next-line no-alert
    alert('검색어를 입력하세요');
    return false;
  }

  fetch(`${url}?query=${value}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);
  return true;
}

$btn.addEventListener('click', search);
