const str = "Hello World";
const lowerStr = str.toLowerCase();
let consonantCount = 0;
const vowels = 'aeiou';
for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr[i];
    if (char >= 'a' && char <= 'z' && !vowels.includes(char)) {
        consonantCount++;
    }
}
console.log(consonantCount); 
