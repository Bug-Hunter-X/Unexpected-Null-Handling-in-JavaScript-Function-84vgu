function foo(a, b) {
  // Check for null values and throw an error if either is null
  if (a === null || b === null) {
    throw new Error('Inputs cannot be null');
  }
  return a + b;
}

// Example usage
console.log(foo(1, 2)); // Output: 3

try {
  console.log(foo(null, 2)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Inputs cannot be null
}

try {
  console.log(foo(1, null)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Inputs cannot be null
}

try {
  console.log(foo(null, null)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Inputs cannot be null
}