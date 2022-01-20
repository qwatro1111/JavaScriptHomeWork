function isPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}

var arr = [1, 2, -4, 3, -9, -1, 7];

console.log(arr);

var newArr = [];
for (var key in arr) {
    if (isPositive(arr[key])) {
        newArr.push(arr[key]);
    }
}
console.log(newArr);