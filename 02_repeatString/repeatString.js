const repeatString = function (str, num) {
  if (num < 0) {
    return "ERROR";
  }

  let repeat = "";

  for (let i = num; i > 0; i--) {
    repeat += str;
  }
  return repeat;
};

module.exports = repeatString;
