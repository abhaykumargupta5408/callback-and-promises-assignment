function manipulateString(str) {
    const manipulatedString = str.toUpperCase();
    
    function logString() {
      console.log(`The manipulated string is: ${manipulatedString}`);
    }
    
    return logString;
  }
  
  const inputString = "Hello, World!";
  const logManipulatedString = manipulateString(inputString);
  
  logManipulatedString(); // Output: The manipulated string is: HELLO, WORLD!
  