function f () {
    let result = 0;
    for (var key in arguments) {
        if (typeof arguments[key] == 'number') {
            result += arguments[key];
        } else {
            return "Error: parameter type is not a Number";
        }
    }

    return result;
}

console.log(f(1,2,3));
console.log(f(1,1,1,1,1,1,1,1));
console.log(f(1,2,'s',4));