let array = [2, 3, 4, 6, 9, 12, 15];
let specificNumber = 3;
let count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % specificNumber === 0) {
        count++;
    }
}

console.log("Number of multiples of", specificNumber, ":", count);
