var arr = [8, 10, 15, 20, 30]; 
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
        console.log("First element divisible by both 3 and 5 is: " + arr[i]);
        break;
    }
}
