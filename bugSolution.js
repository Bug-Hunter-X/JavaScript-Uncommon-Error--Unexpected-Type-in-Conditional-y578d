function myFunction(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-number inputs gracefully
  }
  if (a === 0 || b === 0) {
    return 0; // Prevents division by zero
  }
  return a / b;
}
