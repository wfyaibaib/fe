let a = "a";
let c = `c`;

console.log(`first line\nsecond line`)
console.log(String.raw`first line\n second line!`);

let b = new Boolean();
console.log(typeof b);

let s = new String();
console.log(typeof s);

let n = new Number();
console.log(typeof n);

let fooSymbol = Symbol.for("foo");
console.log(typeof fooSymbol);
let otherFooSymbol = Symbol.for("foo");
console.log(fooSymbol == otherFooSymbol);

let localFoo = Symbol('foo');
let globalFoo = Symbol.for('foo');
console.log(localFoo == globalFoo);