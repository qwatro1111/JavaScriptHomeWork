var arr = [1,2,3,4,5,6];

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
        if (arr[j] < arr[j + 1]) {
            let num = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = num;
        }
    }
}

console.log(arr);