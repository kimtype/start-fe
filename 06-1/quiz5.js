const $boxes = document.querySelectorAll('.box');
let box = null;
let offset = { x: 0, y: 0 };


function mousedown (event){
  box = event.target;

  offset.x = box.offsetLeft - event.clientX;
  offset.y = box.offsetTop - event.clientY;
};

function mouseup(){
  box = null;
};

function mousemove(event){
  if (!box) return;

  box.style.left = event.clientX + offset.x;
  box.style.top = event.clientY + offset.y;
};

function move(){
$boxes.forEach($box => {
    $box.addEventListener('mousedown', mousedown);
    $box.addEventListener('mouseup', mouseup);
})
document.body.addEventListener('mousemove', mousemove);

};

move();


