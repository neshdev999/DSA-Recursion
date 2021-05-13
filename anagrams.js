let findAnagrams = (word) => {
    if (!word || typeof word !== "string") {
        return "Please enter a string";
    } else if (word.length < 2) {
        return word;
    }

    let anagramsArray = [];
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        let remaingChars = word.slice(0, i) + word.slice(i + 1, word.length);
        for (let anagram of findAnagrams(remaingChars)) {
            anagramsArray.push(char + anagram);
        }
    }
    return anagramsArray;
}


let output = findAnagrams("abc");
console.log(output);