const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const url = 'https://dapi.kakao.com/v2/search/web';

function success() {}
function error() {}
function search() {
  const { value } = $text;
  if (value === '') {
    // eslint=disablic-next-line no-alert
    alert('검색어를 입력하세요');
    return false;
  }

  fetch(`${url}?query=${value}`).then(success).catch(error);
  return true;
}

$btn.addEventListener('click', search);
