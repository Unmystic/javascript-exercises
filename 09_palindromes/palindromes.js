const isAlphaNumeric = (str) => /^[a-z0-9]*$/gi.test(str);

const palindromes = function(s) {
    s = s.toLowerCase()
    let i = 0;
    let j = s.length - 1;
    while (j > i) {
        if (!isAlphaNumeric(s[j])) {
            j--;
            continue;
        }
        if (!isAlphaNumeric(s[i])) {
            j--;
            continue;
        }
        if (s[i] != s[j]) return false;
        i++
        j--
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
