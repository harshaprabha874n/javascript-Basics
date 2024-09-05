let arr = [1, 8, 15, 27, 64, 100];  
let count = 0;

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let cubeRoot = 1;
    while (cubeRoot * cubeRoot * cubeRoot < num) {
        cubeRoot++;
    }

    if (cubeRoot * cubeRoot * cubeRoot === num) {
        count++;
    }
}

console.log(count);  
