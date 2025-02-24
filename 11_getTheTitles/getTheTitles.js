const getTheTitles = function(arr) {
    const res = [];
    for (const key of arr) {
        res.push(key["title"]);
    }
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
