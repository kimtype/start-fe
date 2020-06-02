function avg(...nums) {
  let count = 0;
  let sum = 0;

  function average(numbers) {
    numbers.forEach(function (num) {
      if (!isNaN(num)) {
        count += 1;
        sum += num;
      } else if (Array.isArray(num)) {
        average(num);
      }
    });
  }
  average(nums);

  return sum / count;
}

module.exports = avg;
