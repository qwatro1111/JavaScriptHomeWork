function f () {
    for (var key in arguments) {
        if (typeof arguments[key] !== 'number') {
            return "Error: parameter type is not a Number";
        }
    }

    return (arguments[0] - arguments[1]) / arguments[2];
}

console.log(f(9,3,2));
console.log(f('s',9,3));