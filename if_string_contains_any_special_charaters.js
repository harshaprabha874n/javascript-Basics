let str = "Hello@World";
let hasSpecialChar = false;
for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (
        !(charCode >= 48 && charCode <= 57) &&  
        !(charCode >= 65 && charCode <= 90) &&  
        !(charCode >= 97 && charCode <= 122)    
    ) {
        hasSpecialChar = true;
        break;
    }
}

if (hasSpecialChar) {
    console.log("The string contains special characters.");
} else {
    console.log("The string does not contain special characters.");
}