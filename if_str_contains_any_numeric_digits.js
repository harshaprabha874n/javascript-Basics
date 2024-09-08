let str = "Hello123";
let hasDigit = false;

for (let i = 0; i < str.length; i++) {
  if (str[i] >= '0' && str[i] <= '9') {
    hasDigit = true;
    break;
  }
}

if (hasDigit) {
  console.log("The string contains numeric digits.");
} else {
  console.log("The string does not contain numeric digits.");
}
