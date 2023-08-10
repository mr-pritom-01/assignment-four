function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'This is not a valid input, Both have to "string"';
    }

    if(string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}
const inputString1 = "John Doe";
const inputString2 = "ohn";
const result = matchFinder(inputString1, inputString2);
console.log(result);

