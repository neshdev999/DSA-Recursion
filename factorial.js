const findFactorial = function(selectedNumber) {
    if (selectedNumber === 1) {
        return 1;
    }
    return selectedNumber * findFactorial(selectedNumber - 1);
}
let choosenNumber = 5;
console.log(findFactorial(choosenNumber));