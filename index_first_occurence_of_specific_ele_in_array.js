const array = [10, 20, 30, 40, 20];
const numberToFind = 20;
var index = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === numberToFind) {
        index = i;
        console.log("Index of the number:", index);
        break
    }
}
if(index===0){
    console.log("not Found")
}