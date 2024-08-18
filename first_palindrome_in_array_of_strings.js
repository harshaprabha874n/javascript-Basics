var strings = ["apple", "banana", "civic", "hello", "level"];
var firstPalindrome = 0;
for (var i = 0; i < strings.length; i++) {
    var str = strings[i].toLowerCase();  
    var isPalindrome = true;
    for (var j = 0; j < str.length / 2; j++) {
        if (str[j] !== str[str.length - 1 - j]) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        firstPalindrome = strings[i];
        break; 
    }
}
if (firstPalindrome) {
    console.log("The first palindrome is: " + firstPalindrome);
} else {
    console.log("No palindrome found");
}