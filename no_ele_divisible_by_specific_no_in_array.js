var arr = [5, 10, 15, 20, 25, 30, 35, 40];
var specificNumber = 4;
var count = 0; 
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % specificNumber === 0) {
        count += 1;
    }
}
console.log(count);
