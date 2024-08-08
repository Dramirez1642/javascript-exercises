const fibonacci = function(a) {
    let input
    if (typeof input !== 'number') {
        input = parseInt(a)
    }
    else {
        input = a
    }

    if (input < 0) {return "OOPS"}

    if (input == 0) {return 0;}

    let secondPrev = 0
    let firstPrev = 1

    for (i = 2; i <= input; i++) {
        let currentNum = secondPrev + firstPrev
        secondPrev = firstPrev
        firstPrev = currentNum
    }
    return firstPrev
};

// Do not edit below this line
module.exports = fibonacci;
