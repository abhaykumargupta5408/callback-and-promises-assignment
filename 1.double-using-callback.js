function doubleUsingCallback(arr, callback) {
    const doubledArray = arr.map(callback);
    return doubledArray;
  }
  
  // Example callback function to double a number
  function doubleNumber(num) {
    return num * 2;
  }
  
  const inputArray = [1, 2, 3, 4, 5];
  const doubledArray = doubleUsingCallback(inputArray, doubleNumber);
  
  console.log(doubledArray); // Output: [2, 4, 6, 8, 10]
  