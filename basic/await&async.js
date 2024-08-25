//The await keyword is a special command which tells JavaScript
// to stop the execution of the current function until a Promise resolves, and then return the promises value.
//The await keyword only works inside async functions 
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function sumAsync(x, y) {
    await sleep(500);
    return x+y;
}
sumAsync(5, 7).then((result) => {
    console.log("The result of the addition is:", result);
});
