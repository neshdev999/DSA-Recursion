const stringSplitter = function (data, seperator, holderArray){
    let output = holderArray || [];
    let sepIndex = data.indexOf(seperator);
    if(sepIndex === -1){
        output.push(data);
        return output;
    }
    output.push(data.substring(0,sepIndex));
    return stringSplitter(data.slice(sepIndex+1), seperator, output);
}
console.log(stringSplitter('02/20/2020','/'));