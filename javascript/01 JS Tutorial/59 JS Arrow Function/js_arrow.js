
/* Using arrow functions */
// An empty arrow function returns undefined
const empty = () => { };

(() => "football")();
// Returns "football"
// (this is an immediately invoked function expression)

const simple = (a) => (a > 15 ? 15 : a);
console.log(simple(16), simple(11));

const max = (a, b) => (a > b ? a : b);
console.log(max(17, 23));

// Easy array filtering, mapping, etc.
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
console.log(sum);