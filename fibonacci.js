const findFibonacci = function (selectedNumber){
    if(selectedNumber === 1){
        return 0;
    }
    if(selectedNumber === 2){
        return 1;
    }
    return findFibonacci(selectedNumber -1) + findFibonacci(selectedNumber -2);
}

let choosenNumber = 7;
console.log(findFibonacci(choosenNumber));