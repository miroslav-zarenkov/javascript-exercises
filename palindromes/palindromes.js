const palindromes = function (string) {
    if (string.toLowerCase().split('').reverse().join('')
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s/g, "") === 
    string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s/g, "")) {
        return true
    }
        return false
}

module.exports = palindromes;


//string.replace(/\s/g,"") delete spaces
//string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") delete all punctuation
//string.toLowerCase() lower case
//string.reverse() reverse not works on string only on arrays
//string.split('').reverse().join('') split to array, reverse, join back to string
