function calculateArea(length, width) {
    if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0) {
      
      return null;
    }
  
    const area = length * width; 
    return area;
  }
  
  // Example usage:
  const length = 5;
  const width = 10;
  const area = calculateArea(length, width);
  console.log("The area of the rectangle is:", area); 
  
  
  
  // Output: The area of the rectangle is: 50
  