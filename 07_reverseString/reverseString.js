const reverseString = function(string) {
    
    // if( string === ''){
    //     return string;
    // }
    // const length = string.length;
    // let reverseStr = '';
    // for( let i=0; i<length; i++ ){
    //     reverseStr += string[length-1-i];
    // }
    // return reverseStr;
    return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
