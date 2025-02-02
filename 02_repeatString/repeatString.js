const repeatString = function (value, num) {
  let output = "";
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 0; i < num; i++) output += value;
  return output;
};

// Do not edit below this line
module.exports = repeatString;
