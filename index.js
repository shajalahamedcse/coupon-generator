"use strict"

function randomElement(minimum, maximum){
    return Math.floor(Math.random()*(maximum - minimum + 1)) + minimum;
}

    
/**
 *
 * @param JSON options
 * @return string
 * @throws Exception
 */
function generate(options){

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

    for(let index = 0; index < length; index++){
        console.log(randomElement(0,index))
    }
}


function generateCoupons(maxNumberOfCoupons=1, config){

}
const config = {length: 3};
generate(config);
module.exports  = {
    generateCoupon: generateCoupon
}