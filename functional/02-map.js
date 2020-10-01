// Helper functions
const customMap = (fn, arr) => arr.map(fn);

const partial = (fn, ...presetArgs) => (...laterArgs) =>
  fn(...presetArgs, ...laterArgs)

const unary = fn => first => fn(first);
// ==============

const numbers = [1, 2, 3, 4, 5];

// Imperative handling
const powers = [];
for (let i = 0; i < numbers.length; i++) {
  // powers.push(Math.pow(2, numbers[i]));
  // or
  powers[i] = Math.pow(2, numbers[i]);
}
powers;


// Array.prototype.map

const powersOfTwo = numbers.map(function(num, idx, arr) {
  // console.log(`value: ${num}, index: ${idx}, array: ${arr}`);
  return Math.pow(2,num); 
})
powersOfTwo;

numbers.map(num => Math.pow(2, num));

// more
const powerOfTwo = partial(Math.pow, 2); 
numbers.map(powerOfTwo);

// more
customMap(powerOfTwo, [1, 2, 3, 4, 5]);

// Careful about what function you passed in
["1","2","3"].map(parseInt);
["1","2","3"].map(unary(parseInt));

// Function.protoype.length displays number of arguments
parseInt.length;
Math.pow.length;

const sum = (a, b, c, d) => a + b + c + d;
sum.length;