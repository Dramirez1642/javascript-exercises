let repeatedString = '';

const repeatString = function(phrase, number) {
    repeatedString = ''
    if (number < 0) {
        repeatedString = 'ERROR';
    }
    else {
        
        for (let i = 0; i < number; i++) {
            repeatedString += phrase;
        }
    }
return repeatedString;
}
// Do not edit below this line
module.exports = repeatString;