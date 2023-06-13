
/* This in function context */

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