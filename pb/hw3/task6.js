function isEven(number) {
    if (typeof number !== 'number') {
        return 'Error: parameter type is not a Number';
    }

    return (number % 2 === 0) ? true : false;
}

console.log(isEven(3));
console.log(isEven(4));
console.log(isEven('Content'));