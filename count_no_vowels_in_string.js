var str="Harsha Prabha"
var count=0
for(var i=0;i<str.length;i++){
    if( str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"||str[i]=="A"||str[i]=="E"||str[i]=="I"||str[i]=="O"||str[i]=="U"){
        count+=1
    }
}
console.log(count)
