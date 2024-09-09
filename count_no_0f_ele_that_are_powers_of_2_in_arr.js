let arr = [1, 2, 3, 4, 5, 8, 16, 18];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  
  if (num > 0 && (num & (num - 1)) === 0) {
    count++;
  }
}

console.log("Number of powers of 2:", count);
