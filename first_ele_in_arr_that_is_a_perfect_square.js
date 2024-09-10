let arr = [2, 8, 15, 25, 7, 36, 9]; 
let firstPerfectSquare = null; 

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let sqrt = 0;
    while (sqrt * sqrt < num) {
        sqrt++;
    }
    if (sqrt * sqrt === num) {
        firstPerfectSquare = num;
        break; 
    }
}

console.log(firstPerfectSquare);
