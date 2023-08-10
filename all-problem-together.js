function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'This is not a valid input type';
    }
    const cubeResult = number ** 3;
    return cubeResult;
}
const validInput = 4;
const afterCube = cubeNumber(validInput);

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'This is not a valid input, Both have to "string"';
    }
    if (string1.includes(string2)) {
        return true;
    }
    else {
        return false;
    }
}
const inputString1 = "John Doe";
const inputString2 = "ohn";
const result = matchFinder(inputString1, inputString2);

function sortMaker(arr) {
    if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid input";
    } else if (arr[0] == arr[1]) {
        return "equal";
    } else if (arr[1] > 0) {
        return arr.sort((a, b) => b - a);
    } else {
        return arr;
    }
}
const arr1 = [1, 2];
const result1 = sortMaker(arr1);

const arr2 = [4, 4];
const result2 = sortMaker(arr2);

const arr3 = [4, -2];
const result3 = sortMaker(arr3);

function findAddress(obj) {
    const info = obj.street + ',' + obj.house + ',' + obj.society;
    return info;
}
const address = {
    street: '10',
    house: '15A',
    society: 'Earth Perfect'
}