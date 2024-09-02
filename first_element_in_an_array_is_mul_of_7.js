let arr = [5, 12, 21, 14, 25, 42];
let result = null;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 7 === 0) {
        result = arr[i];
        break;
    }
}

console.log(result);
