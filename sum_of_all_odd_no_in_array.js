var arr=[3,4,2,5,6,]
var sum=0
for (var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        var even=arr[i]
    }
    else{
     sum=sum+arr[i]
    }
}
console.log(sum)