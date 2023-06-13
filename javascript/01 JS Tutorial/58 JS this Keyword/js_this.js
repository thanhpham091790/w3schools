
/* This in function context */
{

    // An object can be passed as the first argument to call
    // or apply and this will be bound to it.
    const obj = { a: "Custom" };

    // Variable declared with var become properties of the global object.
    var a = "Global";

    function whatsThis() {
        return this.a; // The value of this is dependent on how the function is called.
    }

    console.log(whatsThis()); // 'Global'; this in function isn't set, so it defaults to the global/window objecdt in non-strict mode.
    obj.whatsThis = whatsThis;
    console.log(obj.whatsThis()); // 'Custom'; this in the function is set to obj

    function add(c, d) {
        return this.a + this.b + c + d;
    }

    const o = { a: 1, b: 3 };

    // The first parameter is the object to use as 'this'; subsequent
    // parameters are used as arguments in the function call
    console.log(add.call(o, 5, 7));

    // The first parameter is the object to use as 'this', the second is an 
    // array whose members are used as arguments in the function call
    console.log(add.apply(o, [10, 20]));
}

/* This and object conversion */
function bar() {
    console.log(Object.prototype.toString.call(this));
}

bar.call(7);
bar.call("foo");
bar.call(undefined);

/* The bind() method */
{
    function f() {
        return this.a;
    }

    const g = f.bind({ a: "azerty" });
    console.log(g()); // azerty

    const h = g.bind({ a: "yoo" }); // bind only works once!
    console.log(h()); // azerty

    const o = { a: 37, f, g, h };
    console.log(o.a, o.f(), o.g(), o.h());
}

/* This in arrow functions */
{
    const obj = {
        getThisGetter() {
            const getter = () => this;
            return getter;
        }
    };

    const fn = obj.getThisGetter();

    console.log(fn() === obj);
}

/* This with a getter or setter */
{
    function sum() {
        return this.a + this.b + this.c;
    }

    const o = {
        a: 1,
        b: 2,
        c: 3,
        get average() {
            return (this.a + this.b + this.c) / 3;
        }
    };

    Object.defineProperty(o, "sum", {
        get: sum,
        enumerable: true,
        configurable: true
    });

    console.log(o.average, o.sum);
}

/* As a DOM event handler */
{
    // When called as a listener, turns the related element blue
    function bluify(e) {
        // Alway true
        console.log(this === e.currentTarget);
        // true when currentTarget and target are the same object
        console.log(this === e.target);
        this.style.backgroundColor = "#A5D9F3";
    }

    // Get a list of every element in the document
    const elements = document.getElementsByTagName("*");

    // Add bluify as a click listener so when the 
    // element is clicked on, it turns blue
    for (const element of elements) {
        element.addEventListener("click", bluify, false);
    }
}