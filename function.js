function findMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
    
      return null;
    }
  
    let maxNumber = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
       
        maxNumber = numbers[i];
      }
    }
  
    return maxNumber;
  }
  
  
  const numbersArray = [10, 5, 8, 20, 3];
  const maxNumber = findMax(numbersArray);
  console.log("The maximum number is:", maxNumber); 
  
  
  // Output: The maximum number is: 20