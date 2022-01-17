var arr = [1,2,3,4], sumEvens = 0, arrLength;
arrLength = arr.length;
for (var i = 0; i < arrLength; i++) {
    if (arr[i] % 2 == 0 && arr[i] > 3) {
        sumEvens += arr[i];
    }
}

console.log(sumEvens);