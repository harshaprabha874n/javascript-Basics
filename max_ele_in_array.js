arr=[20,40,60,55,9,0]
let max=arr[0]
for(let i=1;i>arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
console.log("Maximum Element",max)