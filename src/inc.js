function incrementHash() {
  // Get the current hash (e.g., "#10"). The slice(1) removes the leading "#".
  let currentHash = window.location.hash.slice(1); 
  
  // Try to parse the current hash as an integer.
  let number = parseInt(currentHash, 10);

  // Check if it's a valid number.
  if (!isNaN(number)) {
    // Increment the number.
    number++;
    // Set the new hash value. The browser automatically adds the "#" if not present.
    window.location.hash = number; 
  } else {
    // If the current hash is not a number (e.g., "", "#section1"), start from 1.
    window.location.hash = 1;
  }
}
