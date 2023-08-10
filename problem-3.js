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
console.log("Result 1:", result1);

const arr2 = [4, 4];
const result2 = sortMaker(arr2);
console.log("Result 2:", result2);

const arr3 = [4, -2];
const result3 = sortMaker(arr3);
console.log("Result 3:", result3);
