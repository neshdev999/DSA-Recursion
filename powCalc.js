const powCalc = function(base, exponent){

    if(exponent < 0){
        return "exponent should be >= 0";
    }

    if(exponent === 1){
        return base;
    }

    return base * powCalc(base, exponent-1);
}

console.log(powCalc(10,2));
console.log(powCalc(10,-2));
console.log(powCalc(3,4));
console.log(powCalc(2,6));