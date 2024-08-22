let str = "There are 123 apples and 45 oranges."
let digitCount = 0
for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char >= '0' && char <= '9') {
        digitCount++;
    }
}
console.log(digitCount);