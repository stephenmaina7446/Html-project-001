function reverseStringConcise(str) {
  return str.split("").reverse().join("");
}

// Test cases
console.log(reverseString("welcome")); // Expected output: "emoclew"
console.log(reverseString("12345")); // Expected output: "54321"
console.log(reverseString("Monday")); // Expected output: "yadnoM"

console.log(reverseStringConcise("welcome")); // Expected output: "emoclew"
console.log(reverseStringConcise("12345")); // Expected output: "54321"
console.log(reverseStringConcise("Hey")); // Expected output: "yeH"

