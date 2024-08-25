/**promise 
 * pending - set of code will be in pending stage until its running
 * resolve - denotes completion we use resolve
 * reject - error
 **/

//promise is a object
//function navae promise kula pass pandrathu
// ()=>{} anonymous function
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; 
         if (success) {
            resolve("The operation was successful!"); 
        } else {
            reject("The operation failed!"); 
        }
    }, 2000); 
});
myPromise
    .then((message) => {
        console.log("Success:", message); 
    })
    .catch((error) => {
        console.log("Error:", error); 
    });
