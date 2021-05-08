
const countSheep = function(sheepAll){
    if(sheepAll === 0){
        return "All sheep jumped over the fence";
    }

    return  (sheepAll) +":Another sheep jumps over the fence\n" +countSheep(sheepAll-1);
}

let sheepNumber = 3;
console.log(countSheep(sheepNumber));