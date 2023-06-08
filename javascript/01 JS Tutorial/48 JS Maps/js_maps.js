
/* Using the Map object */

{
    const myMap = new Map();

    const keyString = 'a string';
    const keyObj = {};
    const keyFunc = function () { };

    // Setting the values
    myMap.set(keyString, 'value associated with "a string"');
    myMap.set(keyObj, 'value associated with keyObj');
    myMap.set(keyFunc, 'value associated with keyFunc');

    console.log(myMap.size);

    // Getting the values
    console.log(myMap.get(keyString)); // 'value associated with "a string"'
    console.log(myMap.get(keyObj)); // 'value associated with keyObj'
    console.log(myMap.get(keyFunc)); // 'value associated with keyFunc'

    console.log(myMap.get('a string')); // 'value associated with "a string"'
    console.log(myMap.get({})); // undefined, because keyObj !== {}
    console.log(myMap.get(function () { })); // undefined, because keyFunc !== function () {}
}

/* Using NaN as Map keys */
{
    const myMap = new Map();
    myMap.set(NaN, "not a number");
    console.log(myMap.get(NaN)); // "not a number"

    const otherNaN = Number("foo");
    console.log(myMap.get(otherNaN)); // "not a number"
}

/* Iterating Map with for...of */
{
    const myMap = new Map();

    myMap.set(0, "zero");
    myMap.set(1, "one");

    for (const [key, value] of myMap) {
        console.log(`${key} = ${value}`);
    }
    // 0 = zero
    // 1 = one

    for (const key of myMap.keys()) {
        console.log(key);
    }
    // 0
    // 1

    for (const value of myMap.values()) {
        console.log(value);
    }
    // zero
    // one

    for (const [key, value] of myMap.entries()) {
        console.log(`${key} = ${value}`);
    }
    // 0 = zero
    // 1 = one
}

/* Iterating map with forEach() */
{
    const myMap = new Map(
        [
            ['thanh', 'Pham Hong Thanh'],
            ['thuy', 'Tran Thi Thuy']
        ]
    );

    myMap.forEach(function (value, key) {
        console.log(`${key} = ${value}`);
    });
}

/* Relation with Array object */
{
    const kvArray = [
        ["key1", "value1"],
        ["key2", "value2"],
    ];

    // Use the regular Map constructor to transform a 2D key-value Array to a map
    const myMap = new Map(kvArray);
    console.log(myMap.get("key1")); // "value1"

    // Use Array.from() to transform a Map into a 2D key-value Array
    console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray

    // Use the spread syntax to transform a Map into a 2D key-value Array as kvArray
    console.log([...myMap]);

    // Or use the keys() or values() iterators, and convert them to an array
    console.log(Array.from(myMap.keys())); // ["key1", "key2"]
    console.log(Array.from(myMap.values())); // ["value1", "value2"]
}

/* Cloning and mergin Maps */
{
    const original = new Map([[1, "one"]]);
    const clone = new Map(original);

    console.log(clone.get(1)); // "one"
    console.log(original === clone); // false

    const first = new Map([
        [1, "one"],
        [2, "two"],
        [3, "three"]
    ]);

    const second = new Map([
        [1, "uno"],
        [2, "dos"]
    ]);

    // Merge two maps. The last repeated key wins.
    // Spread syntax essentially converts a Map to an Array
    const merged = new Map([...first, ...second, [3, "Thanh"]]);
    console.log(first);
    console.log(second);
    console.log(`${merged.get(1)} - ${merged.get(2)} - ${merged.get(3)}`);
}
