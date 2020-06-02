let result = null;
let min = null;
let max = null;

debugger;

function random() {
  switch (arguments.length) {
    case 1:
      min = 0;
      max = arguments[0];
      break;
    case 2:
      if (arguments[0] < arguments[1]) {
        min = arguments[0];
        max = arguments[1];
      } else {
        min = arguments[1];
        max = arguments[0];
      }
  }
  result = Math.floor(Math.random() * (max - min + 1)) + min;

  if (isNaN(result)) {
    return -1;
  }

  return result;
}

module.exports = random;
