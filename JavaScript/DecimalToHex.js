// Function to convert decimal to hexadecimal
function decimalToHex(decimalNumber) {
    if (decimalNumber < 0) {
        return "-" + Math.abs(decimalNumber).toString(16).toUpperCase();
    }
    return decimalNumber.toString(16).toUpperCase();
}

// Example usage
console.log(decimalToHex(255));   // Output: FF
console.log(decimalToHex(4095));  // Output: FFF
console.log(decimalToHex(1234));  // Output: 4D2
console.log(decimalToHex(-42));   // Output: -2A
