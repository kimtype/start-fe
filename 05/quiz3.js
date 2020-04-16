var $box =   document.querySelector('.box');
var $boxEl = document.getElementsByClassName('.box');



///// red 추가하기

var $addRedBtn = document.querySelector('.add-red');
$addRedBtn.addEventListener('click', addRed);
function addRed(){
    $box.className += ' red';
    console.log($box);
}

///// <div .box> 추가 하기
var $addBoxBtn = document.querySelector('.add-btn');
$addBoxBtn.addEventListener('click', addBox);
var $body = document.querySelector('body');

function addBox(){
    var addDiv = document.createElement('div');
    var $class = $box.className;
    addDiv.setAttribute('class', $class);
    $body.appendChild(addDiv);
}

/// div .box> 삭제 하기
var $deleteBoxBtn = document.querySelector('.delete-btn');
$deleteBoxBtn.addEventListener('click',deleteBox);
function deleteBox(){
    var $class = $box.className;
    var childrenBox = document.getElementsByClassName($class);
    if(childrenBox.length == 0) return;
    $body.removeChild(childrenBox[0]);
}

//// 모든 box에 value 추가

// .
// ..
// .








