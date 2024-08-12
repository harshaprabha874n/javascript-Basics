//datatypes
//string,number,null,boolean,undefined,array,object

//variables
/*var a="harsha"
console.log(a)*/

//array
/*var array=[10,80,30,40]
console.log(array)*/
//object
/*var object={
    name:'harsha',
    age:20
};
console.log(object)
document.getElementById("result").innerText='myname=> ${object.name} myage=>${object.age}';
document.getElementById("result").innerHTML=object;
document.getElementById("result").innerHTML = object.name + ","+object.age ;*/
//button
function hitButton(){
    console.log("button hit");
}
document.getElementById("demo").addEventListener("click",hitButton);
