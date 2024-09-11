let str = "Hello World!";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] >= 'a' && str[i] <= 'z') {
    count++;
  }
}

console.log("Number of lowercase letters:", count);
