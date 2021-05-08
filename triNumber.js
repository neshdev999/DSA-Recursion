const triNumber = function (sideDot){
    if(sideDot === 1){
        return 1;
    }

    return sideDot + triNumber(sideDot-1);
}

let dotsOnSide = 7;
console.log(triNumber(dotsOnSide));