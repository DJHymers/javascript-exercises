const sumAll = function (low, high) {
  let sum = 0;

  if (
    low < 0 ||
    high < 0 ||
    typeof low !== "number" ||
    typeof high !== "number"
  ) {
    return "ERROR";
  }

  if (low < high) {
    for (let i = low; i <= high; i++) {
      sum += i;
    }
  } else if (low > high) {
    for (let j = low; j >= high; j--) {
      sum += j;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
