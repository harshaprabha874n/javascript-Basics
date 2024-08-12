var str="Harsha Prabha"
var count=0
var vowels="aeiouAEIOU"
for(var i=0;i<str.length;i++){
    if(vowels.includes(str[i])){
        count+=1
    }
}
console.log(count)
