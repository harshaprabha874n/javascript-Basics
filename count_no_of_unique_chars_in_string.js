const str = "yourStringHere";
let uniqueCount = 0;
let isUnique;

for (let i = 0; i < str.length; i++) {
    isUnique = true; 
    for (let j = 0; j < i; j++) {
        if (str[i] === str[j]) {
            isUnique = false; 
            break; 
        }
    }
    if (isUnique) {
        uniqueCount++;
    }
}

console.log(uniqueCount);
