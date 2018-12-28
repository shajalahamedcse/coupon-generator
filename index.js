"use strict"

function randomInteger(minimum, maximum){
    return Math.floor(Math.random()*(maximum - minimum + 1)) + minimum;
}

function randomElement(arr) {
    return arr[randomInteger(0, arr.length - 1)];
}
    
/**
 *
 * @param JSON options
 * @return string
 * 
 */
function generateOne(options){

    let length = options.length || 8 ;
    let prefix = options.prefix || '' ;
    let suffix = options.suffix || '' ;
    let useLetters = options.useLetters || true ;
    let useNumbers = options.useNumbers || false ;
    let useMixedCase = options.useMixedCase || false;

    const numbers = "0123456789" ;
    const lowerCase = "abcdefghijklmnopqrstuvwxyz" ;
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
    let code = "";
    let characters = "";

    if (useLetters){
        if (useMixedCase) {
            characters += lowerCase + upperCase ;
        } 
        else{
            characters += upperCase;
        }
    }

    if (useNumbers) {
        characters += numbers ;
    }


    for(let index = 0; index < length; index++){
        console.log(randomInteger(0,characters.length));
        code += randomElement(characters);
    }
    console.log(code);
    
    return prefix+code+suffix;
}



function generateCoupons(config){
    
    let count = config.count;
    let codes = {};

    while (count > 0) {
        var code = generateOne(config);
        if (codes[code] === undefined) {
            codes[code] = true;
            count--;
        }
    }

    return Object.keys(codes);
}

const config = {length: 3};
generateOne(config);

module.exports  = {
    generateCoupons: generateCoupons
}