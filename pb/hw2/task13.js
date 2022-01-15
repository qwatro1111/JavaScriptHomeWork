var arr = [1,2,3,-5,-2,1,-4], findNumber = 4;

for (var i = 0; i < arr.length; i++) {
    if ( findNumber == arr[i] ) {
        console.log("Есть!");
        break
    }
}
