var arr=[10,20,30,40,50]
var giveNum=30
var sum=0
for (let i=0;i<arr.length;i++){
    if(arr[i]>giveNum){
        sum = sum +arr[i]
    }
}
console.log(sum)