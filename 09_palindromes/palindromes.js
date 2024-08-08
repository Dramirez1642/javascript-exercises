const palindromes = function (words) {
    let validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let initString = words.toLowerCase().split('').filter(character => validChars.includes(character)).join('')
    let finalString = initString.split('').reverse().join('')
    return initString === finalString
};

// Do not edit below this line
module.exports = palindromes;
