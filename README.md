# JavaScript Null Handling Bug

This repository demonstrates a common, yet potentially problematic, way of handling null values in JavaScript functions.  The `foo` function checks for null values and returns null if either input `a` or `b` is null. While this appears straightforward, it might mask more serious underlying issues and could lead to unexpected behavior.

**Bug:** The function simply returns null without further processing or error handling.  In some cases, a more sophisticated approach might be needed, such as throwing an error or using a default value.

**Solution:** The solution offers improved handling of null values, showing how a more robust approach can improve code quality and prevent unexpected issues.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` to see the problematic code.
3. Run `bug.js` to observe the function's behavior with various null and non-null inputs.
4. Compare the output with the expected behavior described in the README.
5. Open `bugSolution.js` to see an improved implementation.