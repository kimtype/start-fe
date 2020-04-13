console.log('app.js');


//create
var todos =  ['운동'];
var todo = '게임';


todos.push(todo);
console.log(todos);


// console.log(todos.unshift(todo));
// console.log(todos);

//read

todos.forEach(function(todo){

    console.log(todo);
})


//Update


var todos = ['운동', '게임'];
var updateTodo = '게임';
// var updateIndex = todos.findIndex(function(todo) {
//   return todo === updateTodo;
// });

// console.log(updateIndex);

// todos[updateIndex] = '공부';
// console.log(todos);

// Map
// var newtodos = todos.map(function(todo){
//     return todo + ' 해라.';
// })
// console.log(newtodos);

// var newtodos = todos.map(function(todo){
//     if(todo === updateTodo){
//         return '공부';
//     }
//     return todo;

// });
// console.log(newtodos);

//Delete

// var todos = ['운동', '공부', '목욕'];
// var deleteTodo = '공부';

// var deleteIndex = todos.findIndex(function(todo) {
//   return todo === deleteTodo;
// });
// todos.splice(deleteIndex, 1);
// console.log(todos);


// var isMan = true;

// if(isMan){
//     console.log('1');
// }else if(!isMan&isHero){
//     console.log('2');
// }



// 함수

// function sum(x){
//     var y = 1;
//     return x+y; //return문이 없을 떄는 undefined로 반환
// }
// var sum = function(x){
//     var y = 1;
//     return x+y;
// };


// alert('안녕하세용^)^');


// var who = prompt('당신은 누구세요?');
// console.log(who);



// var isDelete = confirm('정말 삭제하시겠습니까');
// console.log(isDelete);

// function sum (a, b){
//     return a+b;
// }
// console.log(sum(1,2));

// var car = {
//     year: '2014',
//     starting: function() {
//       console.log('starting..');
//     },
//   };

//   car.starting();
  
// (function() { //즉시실행함수 ,캡슐화하는 효과
//     var a = 'a';
//     console.log(a);
//   })();

// function sum(x, y) {
//     if (!y) y = 1;
//     console.log(x + y);
//   }
//     console.log(sum(3));
//     console.log(sum(3,3));





