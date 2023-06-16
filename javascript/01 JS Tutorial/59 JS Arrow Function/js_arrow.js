
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

const even = arr.filter((a) => a % 2 === 0);
console.log(even);

const double = arr.map((a) => a * 2);
console.log(double);

// More concise promise chains
// promise
//     .then((a) => {
//         // ...
//     })
//     .then((a) => {
//         // ...
//     });

// Parameterless arrow functions that are visually easier to parse
setTimeout(() => {
    console.log("I happen sooner");
    setTimeout(() => {
        console.log("I happen later");
    }, 1);
}, 1);