const random = require('./random');
const avg = require('./average');

console.log(random(0, 100));
console.log(random(3));
console.log(random(0, 'a'));

console.log(avg(1, 2, 3, 4));
console.log(avg(1, 'a', 2));
console.log(avg([1, 2, 3, 4]));
