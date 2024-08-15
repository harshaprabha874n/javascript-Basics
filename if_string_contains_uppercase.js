var string="harsha"
var i=0
for ( i=0;i<string.length;i++){
    var char=string[i]
    if(char>="A" && char<="Z"){
        //var char=str[i]
        console.log("Yes")
        break
    }
}
if(i===string.length){
    console.log("no")
}
