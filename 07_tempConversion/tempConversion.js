const convertToCelsius = function (value) {
  // if (!Number.isFinite(value)) return "Error";
  let valueC = ((value - 32) * 5) / 9;
  // Rounds up to 1 decimal places
  return Math.ceil(valueC * 10) / 10;
};

const convertToFahrenheit = function (value) {
  // if (!Number.isFinite(value)) return "Error";
  let valueF = (value * 9) / 5 + 32;
  return Math.ceil(valueF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
