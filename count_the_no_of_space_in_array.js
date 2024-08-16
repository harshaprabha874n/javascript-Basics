var array = ["Hello World", "This is a test", "How many spaces"];
let count = 0;
for (let i = 0; i < array.length; i++) {
    let str = array[i];
    for (let j = 0; j < str.length; j++) {
        if (str[j] === ' ') {
            count++;
        }
    }
}
console.log("Total number of spaces:",count);
