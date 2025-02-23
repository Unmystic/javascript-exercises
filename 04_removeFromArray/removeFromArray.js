const removeFromArray = function (arr, ...otherArgs) {
  for (const arg of otherArgs) {
    while (arr.includes(arg)) {
      arr.splice(arr.indexOf(arg), 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
