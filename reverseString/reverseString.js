const reverseString = function(stringSplit) {
    let reverse = stringSplit.split("").reverse().join("");
    return reverse;
    };

module.exports = reverseString;
