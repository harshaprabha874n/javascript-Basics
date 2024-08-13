var arr=[20,40,60,55,9,0]
let smallNum=arr[0]
for(let i=1;i<arr.length;i++){
    if(arr[i]<smallNum){
        smallNum=arr[i]
    }
}
console.log("Smallest Element",smallNum)