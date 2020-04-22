var $box =   document.querySelector('.box');
var $boxEl = document.getElementsByClassName('.box');
var $body = document.querySelector('body');
var $class = $box.className;

var $addRedBtn = document.querySelector('.add-red');
var $addBoxBtn = document.querySelector('.add-btn');
var $deleteBoxBtn = document.querySelector('.delete-btn');
var $addTextBtn = document.querySelector('.text-btn');
var $resetAllBtn = document.querySelector('.reset-btn');
var $toggleBtn = document.querySelector('.toggle-btn')
var $addImageBtn = document.querySelector('.image-btn');


///// red 추가하기
function addRed(){
    var $box =   document.querySelector('.box');
    $box.className += ' red';
}

///// <div .box> 추가 하기
function addBox(){
    var $box =   document.querySelector('.box');
    var addDiv = document.createElement('div');
    if($box){
        $class = $box.className;
        addDiv.setAttribute('class', $class);
        $box.after(addDiv);
    }else{
        $class = 'box';
        addDiv.setAttribute('class', $class);
        $body.appendChild(addDiv);
    }
}

//// <div .box> 삭제 하기
function deleteBox(){
    var $class = $box.className;
    var childrenBox = document.getElementsByClassName($class);
    if(childrenBox.length == 0) return;
    $body.removeChild(childrenBox[0]);
}

//// 모든 box에 value 추가
function addText(){
    var $boxes = document.querySelectorAll('.box');
    $boxes.forEach(function($box) {
        var $text = document.querySelector('.txt');
        var text = $text.getAttribute('value');
        $box.append(text);
      });
    }

//초기화
function resetBox(){
    var $boxes = document.querySelectorAll('.box');
    $boxes.forEach(function removebox(){
        var $box =   document.querySelector('.box');
        $box.remove();
    });
}

//토글버튼


function toggleBox(){
    var $boxes = document.querySelectorAll('.box');
    $boxes.forEach(function($box){
        if($box.style.display === 'none')
            $box.style.display = 'block';
        else
            $box.style.display = 'none';
    })
}

//이미지 넣기

function addImage(){
    var $boxes = document.querySelectorAll('.box');
    $boxes.forEach(function($box) {
        if ( $boxes){
            var imageSRC = 'https://i.imgur.com/69NjYBH.png';
            var img = document.createElement('img');
            img.src = imageSRC;
            $box.appendChild(img);}
        else{
            addBox();
        }
      });
    }

    $addRedBtn.addEventListener('click', addRed);
    $addBoxBtn.addEventListener('click', addBox);
    $deleteBoxBtn.addEventListener('click',deleteBox);
    $addTextBtn.addEventListener('click', addText);
    $resetAllBtn.addEventListener('click',resetBox);
    $toggleBtn.addEventListener('click', toggleBox);
    $addImageBtn.addEventListener('click', addImage);