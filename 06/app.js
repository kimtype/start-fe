// let a = 'aa'; //for구문에서 사용
// const b = 'bb';
// var c = 'cc';
// c = 33;
// // b = 22; const는 재할당 할 수 없다. 권장

// console.log(a,b,c);

// var str = 'aaaaaaz \
// z';

// const s =`ssssss
// ssss`;
// console.log(str, s);

// function sum(x,y=1){
//     return x+y;
// }

// console.log(sum(1,2));


// const arr = [1,2,3];

// const newArr = arr.map(item => item +1);
// console.log(newArr);

document
    .getElementById('box')
    .addEventListener('click', event=> console.log(1));

    
function sum(x, y, z) {
    return x + y + z;
  }
  const numbers = [1, 2, 3];
  console.log(sum(...numbers));
  console.log(sum(1,2,3));

