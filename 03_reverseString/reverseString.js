const reverseString = function (value) {
  let output = "";
  arr_value = [...value];
  while (arr_value.length > 0) {
    output += arr_value.pop();
  }
  return output;
};

// Do not edit below this line
module.exports = reverseString;
