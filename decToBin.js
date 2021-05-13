/*

Steps to Convert from Decimal to Binary

If you don't have a calculator to hand, you can easily convert a decimal number to binary using the remainder method. This involves dividing the number by 2 recursively until you're left with 0, while taking note of each remainder.

    Write down the decimal number.
    Divide the number by 2.
    Write the result underneath.
    Write the remainder on the right hand side. This will be 0 or 1.
    Divide the result of the division by 2 and again write down the remainder.
    Continue dividing and writing down remainders until the result of the division is 0.
    The most significant bit (MSB) is at the bottom of the column of remainders and the least significant bit (LSB) is at the top.
    Read the series of 1s and 0s on the right from the bottom up. This is the binary equivalent of the decimal number.

*/
let collector = "";
const decToBin = function(numberToWork) {
    let result = numberToWork;

    if (result === 0) {
        return collector;
    }
    collector = collector + (result % 2);
    result = parseInt(result / 2);
    return decToBin(result);
}

let output = decToBin(36);
let splitOutput = output.split("");
let correctArray = splitOutput.reverse();
let finalOutput = correctArray.join("");
console.log("output: " + finalOutput);