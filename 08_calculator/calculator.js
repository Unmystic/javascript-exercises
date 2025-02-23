const add = function(arg1, arg2) {
    return arg1 + arg2;
};

const subtract = function(arg1, arg2) {
    return arg1 - arg2;
};

const sum = function(arr) {
    return arr.reduce((previous, current) => {
       return previous + current;
    }, 0);
};

const multiply = function(arr) {
    return arr.reduce((previous, current) => {
       return previous * current;
    }, 1);
};

const power = function(arg, power) {
    let ans = arg;
    while (power > 1) {
        power -= 1;
        ans *= arg;
    }
    return ans;
};

const factorial = function(num) {
    if (num === 0) {
        return 1;
    }
    let ans = 1;
    while (num > 0) {
        ans *= num;
        num -= 1;
    }
    return ans;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
