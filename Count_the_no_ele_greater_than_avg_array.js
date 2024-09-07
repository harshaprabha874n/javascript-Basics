let arr = [10, 20, 30, 40, 50];
let sum = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
let average = sum / arr.length;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > average) {
        count++;
    }
}

console.log("Number of elements greater than the average: " + count);
