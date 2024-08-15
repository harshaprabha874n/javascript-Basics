var arr=[10,20,30,40]
let existNumber=39
var i=0
for(i=0;i<arr.length;i++){
    if(arr[i]==existNumber){
         console.log("Yes")
         break;
        }
    }
    if(i===arr.length){
    console.log("No")
}