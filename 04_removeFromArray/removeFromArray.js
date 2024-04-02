const removeFromArray = function(array, ... elements) {
    return array.filter(e => elements.indexOf(e) < 0);
};

// Do not edit below this line
module.exports = removeFromArray;
