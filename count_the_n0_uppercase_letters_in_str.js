let str = "Count Me If You Can";
let uppercaseCount = 0;

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= 'A' && char <= 'Z') {
        uppercaseCount++;
    }
}

console.log(uppercaseCount);
