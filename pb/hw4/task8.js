function f(arr) {
    if (!Array.isArray(arr)) {
        console.log('Error: parameter type should be an array');
        return;
    }

    var arrLength = arr.length,
        result = 0;
    for (var i = 0; i < arrLength; i++) {
        result += typeof arr[i] === 'number' ? arr[i] : f(arr[i]);
    }

    return result;
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
var result = f(arr); // 12
console.log(result);

const arr2 = [[[[[1,2]]]]];
var result = f(arr2); // 3
console.log(result);

const arr3 = [[[[[1,2]]],2],1];
var result = f(arr3); // 6
console.log(result);

const arr4 = [[[[[]]]]];
var result = f(arr4); // 0
console.log(result);

const arr5 = [[[[[],3]]]];
var result = f(arr5); // 3
console.log(result);