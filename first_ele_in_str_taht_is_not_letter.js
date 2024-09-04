var str = "abc1def";
var result = '';
var i = 0;

while (i < str.length) {
    var ascii = str[i].charCodeAt(0);
    if (!(ascii >= 65 && ascii <= 90) && !(ascii >= 97 && ascii <= 122)) {
        result = str[i];
        break;
    }
    i++;
}

console.log(result);  
