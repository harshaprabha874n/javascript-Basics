let array = [2, 4, 7, 8, 10];
var allEven = 0
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        console.log("The array does not contain only even numbers.");
        return;  
    }
}
console.log("The array contains only even numbers.");