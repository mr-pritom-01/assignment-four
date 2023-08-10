function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'This is not a valid input type';
    }
    const cubeResult = number ** 3;
    return cubeResult;
}
const validInput = 4;
const afterCube = cubeNumber(validInput);
console.log(afterCube);