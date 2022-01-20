function getDivisors(number) {
    if (typeof number !== 'number') {
        return 'Error: parameter type is not a Number';
    }

    if (number <= 0) {
        return 'Error: parameter can\'t be a 0';
    }

    let divisors = [];
    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
}

console.log(getDivisors(12));
console.log(getDivisors('Content'));
console.log(getDivisors(0));