const sumAll = function (val1, val2) {
  // Better to use isInteger method
  if (
    val1 < 0 ||
    val2 < 0 ||
    typeof val1 != "number" ||
    typeof val2 != "number" ||
    val1 % 1 != 0 ||
    val2 % 1 != 0
  )
    return "ERROR";
  const minVal = val1 < val2 ? val1 : val2;
  const maxVal = val1 > val2 ? val1 : val2;
  let sumsAll = 0;
  for (let i = minVal; i <= maxVal; i++) {
    sumsAll += i;
  }
  return sumsAll;
};

// Do not edit below this line
module.exports = sumAll;
