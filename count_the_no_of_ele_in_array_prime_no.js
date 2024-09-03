let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeCount = 0;

for (let i = 0; i < arr.length; i++) {
    let isPrime = true;
    if (arr[i] < 2) {
        isPrime = false;
    } else {
        for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
            if (arr[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        primeCount++;
    }
}

console.log(primeCount); 
