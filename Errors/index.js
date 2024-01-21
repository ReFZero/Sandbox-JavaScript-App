try {
  const divident = Number(window.prompt("Enter a divident: "));
  const divisor = Number(window.prompt("Enter a divisor: "));
  
  if (divisor === 0) {
    throw new Error("Cannot divide by zero");
  }
  if (isNaN(divisor) || isNaN(divident)) {
    throw new Error("Values must be numbers");
  }

  const result = divident / divisor;
  console.log(result);
} catch (error) {
  console.error(error);
} finally {
  console.log("Finally");
}
console.log("All done");
