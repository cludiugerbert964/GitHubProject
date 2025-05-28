function multiply(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Both numbers must be integers.');
  }
  const result = a * b;
  return result;
}
