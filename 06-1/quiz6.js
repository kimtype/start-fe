const $btn = document.querySelector('#btn')
const $result = document.querySelector('#result')

let input = null;
let result = new Array(9);


function gugudan(){
    input = document.getElementById('num').value;
    if(isNaN(input)){
        alert('숫자를 입력하세요');
        return;
    }

    for(i = 0; i<result.length; i++){
        j = i + 1;
        result[i] = `${input}x${j}=${input*j}`
    }
    $result.innerHTML=result.join('<br>');
}

function Gugudan(){
$btn.addEventListener('click', gugudan);
}

Gugudan();
