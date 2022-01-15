var arr = [1,2,3,4], sumEvens = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        sumEvens += arr[i];
    }
}

console.log(sumEvens);