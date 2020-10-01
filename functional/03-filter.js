// Helper functions
const customFilter = (fn, arr) => arr.filter(fn);

const not = fn => (...args) => !fn(...args);
// ==============
const numbers = [1, 2, 3, 4, 5];

// Imperative handling
const odds = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 1) {
    odds.push(numbers[i]);
  }
}
odds;

// Array.prototype.filter

const oddNumbers = numbers.filter((num, idx, arr) => {
  console.log(`value: ${num}, index: ${idx}, array: ${arr}`);
  return num % 2 === 1;
});
oddNumbers;

const isEven = num => !(num % 2);
const isOdd = not(isEven);

numbers.filter(isOdd);

customFilter(isOdd, numbers);
customFilter(not(isEven), numbers);