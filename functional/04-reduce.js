// Helper functions
const customReduce = (fn, acc, arr) => arr.reduce(fn, acc);
// ==============
const grades = [
  { name: 'Luffy', grade: 'C', point: 55 },
  { name: 'Zoro', grade: 'B', point: 74 },
  { name: 'Nami', grade: 'A', point: 92 },
  { name: 'Usopp', grade: 'B', point: 80 },
  { name: 'Sanji', grade: 'B', point: 73 },
];

// Imperative handling
let average = 0;
for (let i = 0; i < grades.length; i++) {
  average += grades[i].point;
}
average /= grades.length;

// Array.prototype.reduce
const functionalAverage = grades.reduce(function(totalValue, grade, idx, arr) {
  console.log(`totalValue: ${totalValue}`);
  const newTotal = totalValue + grade.point;
  return newTotal;
}, 0) / grades.length;
functionalAverage;

grades.reduce((totalValue, grade) => totalValue + grade.point, 0) / grades.length;

const gradeReducer = (totalValue, grade) => totalValue + grade.point;
customReduce(gradeReducer, 0, grades);



[1, 2, 3, 4, 5].reduce((total, num) => {
  console.log(`total: ${total}`);
  return total + num;
}, 0);

const sum = [1, 2, 3, 4, 5].reduce((a,b) => a + b);
sum;

// Exercise for you: find the distribution of grade letters with reduce (such as: 2 A's, 1 B's 4 D's)