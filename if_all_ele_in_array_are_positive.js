var array=[10,20,30,40,50]
var i=0
for (i=0;i<array.length;i++){
    if(array[i]<0){
        console.log("negative number contains array")
        break
    }
}
if(i === array.length)
console.log("positive array")

