const removeFromArray = function(array, ...targets) {
    return array.filter( (element) => {
        return !targets.includes(element);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
