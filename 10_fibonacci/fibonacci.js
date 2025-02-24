const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    const arr = [0, 1];
    let count = n - 1;
    while (count > 0) {
        count--;
        const value = arr.at(-1) + arr.at(-2);
        arr.push(value);
    }
    return arr.at(n);
};

// Do not edit below this line
module.exports = fibonacci;
