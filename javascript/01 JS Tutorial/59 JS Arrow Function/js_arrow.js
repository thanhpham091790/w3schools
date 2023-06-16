
/* Using arrow functions */
{

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
}

/* Using call, bind, and apply */
{
    {
        const obj = {
            num: 100
        }

        // Setting 'num' on globalThis to show how it is not used.
        globalThis.num = 42;

        // A simple traditional function to operate on 'this'
        const add = function (a, b, c) {
            return this.num + a + b + c;
        }

        console.log(add.call(obj, 1, 2, 3));
        console.log(add.apply(obj, [1, 2, 3]));
        const boundAdd = add.bind(obj);
        console.log(boundAdd(1, 2, 3));
    }
    {
        const obj = {
            num: 100
        };
        // Setting 'num' on globalThis to show how it gets pick up.
        globalThis.num = 42;
        // Arrow function
        const add = (a, b, c) => this.num + a + b + c;

        console.log(add.call(obj, 1, 2, 3));
        console.log(add.apply(obj, [1, 2, 3]));
        const boundAdd = add.bind(obj);
        console.log(boundAdd(1, 2, 3));
    }
    {
        const obj = {
            count: 10,
            doSomethingLater() {
                setTimeout(function () {
                    // The function executes on the window scope
                    this.count++;
                    console.log(this.count);
                }, 300);
            }
        };
        obj.doSomethingLater();
    }
    {
        const obj = {
            count: 10,
            doSomethingLater() {
                setTimeout(() => {
                    this.count++;
                    console.log(this.count);
                }, 300);
            }
        };
        obj.doSomethingLater();
    }
}
