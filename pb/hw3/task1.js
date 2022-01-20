function f (number) {
    if (typeof number == 'number') {
        return number * number * number;
    } else {
        return "Error: parameter type is not a Number";
    }
}

console.log(f(2));