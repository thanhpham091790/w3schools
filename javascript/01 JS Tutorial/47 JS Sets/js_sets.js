
/* Implementing basic set operations */

// Return true if setB is a subset of setA
function isSuperset(setA, setB) {
    for (const elem of setB) {
        if (!setA.has(elem)) {
            return false;
        }
    }
    return true;
}

// Return a new set of elements that joined by setA and setB. 
// Intersection element only display one time.
function union(setA, setB) {
    const _union = new Set(setA);
    for (const elem of setB) {
        _union.add(elem);
    }
    return _union;
}

// Return a new set of elements that belong to setA and setB
function intersection(setA, setB) {
    const _intersection = new Set();
    for (const elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

// Return a new set of elements that belong to setA but not setB 
// Or belong to setB but not setA.
function symetricDifference(setA, setB) {
    const _symetricDifference = new Set(setA);
    for (const elem of setB) {
        if (_symetricDifference.has(elem)) {
            _symetricDifference.delete(elem);
        } else {
            _symetricDifference.add(elem);
        }
    }
    return _symetricDifference;
}

// Return a new set of elements that belong to setA but not setB
function difference(setA, setB) {
    const _difference = new Set(setA);
    for (const elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}

// Example
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);


console.log(isSuperset(setA, setB));
console.log(union(setA, setC));
console.log(intersection(setA, setC));
console.log(symetricDifference(setA, setC));
console.log(difference(setA, setC));

/* Relation to arrays */

const myArray = ['value1', 'value2', 'value3'];

// Use the regular Set contructor to transform an Array into a Set.
const mySet = new Set(myArray);
console.log(myArray);
console.log(mySet);

// Use the spread syntax to transform a Set into an Array.
console.log([...mySet]);


/* Use to remove duplicate elements from an array. */
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
const newSet = new Set(numbers);
console.log(numbers);
console.log([...newSet]);


/* Relation to strings */

const text = "India";

// Use the set contructor to convert a string to a Set.
const mySet1 = new Set(text);
console.log(mySet1);

// Case sensitive and duplicate omission.
console.log(new Set("Firefox"));
console.log(new Set("firefox"));

/* Use a set to ensure the uniqueness of a list of values */
const arrayID = Array.from(document.querySelectorAll("[id]")).map((e) => e.id);
const setID = new Set(arrayID);
console.log(arrayID);
console.log(setID);