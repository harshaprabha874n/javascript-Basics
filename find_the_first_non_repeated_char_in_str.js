var str = "swiss";
var charCount = {}; 
var i, j;
var result = "";
for (i = 0; i < str.length; i++) {
    var char = str[i];
    
    if (charCount[char] === undefined) {
        charCount[char] = 1;  
    } else {
        charCount[char] += 1;
    }
}
for (j = 0; j < str.length; j++) {
    if (charCount[str[j]] === 1) {
        result = str[j];
        break;
    }
}

console.log(result); 
