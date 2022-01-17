var arr = [1,2,3,-5,-2,1,-4], findNumber = 4, arrLength;
arrLength = arr.length;
for (var i = 0; i < arrLength; i++) {
    if ( findNumber == arr[i] ) {
        console.log("Есть!");
        break
    }
}
