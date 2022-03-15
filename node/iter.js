let arr = ['foo', 'bar', 'baz'];

arr.forEach((item) => console.log(item));

for (let e of arr)
{
    console.log(e);
}

let [a, b, c] = arr;
console.log(a, b, c);

let arr2 = [...arr];
console.log(arr2);

let arr3 = Array.from(arr);
console.log(arr3);

let set = new Set(arr);
console.log(set);

let pairs = arr.map((x, i) => [x, i]);
console.log(pairs);

let map = new Map(pairs);
console.log(map);

console.log(arr[Symbol.iterator]);

let iter = arr[Symbol.iterator]();
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

class Counter
{
    constructor(limit)
    {
        this.limit = limit;
    }

    [Symbol.iterator]()
    {
        let count = 1, limit = this.limit;
        return {
            next() {
                if (count <= limit) {
                    return { done: false, value: count++};
                } else {
                    return { done: true, value: undefined};
                }
            }
        };
    }
}

let counter = new Counter(3);
for (let i of counter) 
{
    console.log(i);
}

for (let i of counter) 
{
    console.log(i);
}