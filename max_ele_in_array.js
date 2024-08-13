var arr=[20,40,60,55,9,0]
let maxNum=arr[0]
for(let i=1;i>arr.length;i++){
    if(arr[i]>maxNum){
        maxNum=arr[i]
    }
}
console.log("Maximum Element",maxNum)