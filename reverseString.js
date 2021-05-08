const reverseItem = function (data){
    if(data.length === 1){
        return data.charAt(0);
    }

    return data.charAt(data.length-1) + reverseItem(data.replace(data, data.slice(0,-1)));
}

let trialData ="Hello, try out new dinner plates";
console.log(reverseItem(trialData));

let otherData = "You are funny";
console.log(reverseItem(otherData));