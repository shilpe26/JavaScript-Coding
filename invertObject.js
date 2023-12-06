// Invert the given object.

const invertObj = obj => Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));

const obj = {
    "name": "Doreamon",
    "age": 5,
    "hairColor": "black",
    "eyes": "oval"
}

console.log(invertObj(obj));

/*
The Object.fromEntries() static method transforms a list of key-value pairs into an object.

const test = [
  ['foo', 'bar'],
  ['baz', 42],
]

const obj = Object.fromEntries(test);

console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }

-------------------------------------------------------------------------------------------
The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

const object1 = {
  a: 'somestring',
  b: 42,
};

console.log(Object.entries(object1));
// Expected output: Array [ ["a", "somestring"], ["b", 42]]

*/