const removeFromArray = function (arr, ...params) {
  const newArr = arr;

  for (let i = 0; i < params.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (arr[j] === params[i]) {
        newArr.splice([j], 1);
      }
    }
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
