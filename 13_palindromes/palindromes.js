const palindromes = function (string) {
    let chars = string.replaceAll(/[^a-z0-9]/gi, '').toLowerCase();
    // let length = chars.length;
    // for( let i=0; i<length/2; i++ ){
    //     if( chars.charAt(i) !== chars.charAt(length-1-i) ) {
    //         return false;
    //     }
    // }
    // return true;

    let reverseChars = chars.split('').reverse().join('');
    return chars === reverseChars;
};

// Do not edit below this line
module.exports = palindromes;
