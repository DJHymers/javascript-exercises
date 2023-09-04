const reverseString = function (str) {
  let split = str.split("");

  let revArr = split.reverse();

  return revArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
