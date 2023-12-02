const area = (a) => ("Area: " + a*a);
const perimeter = (a) => ("Perimeter: " + 4*a);
const surfaceArea = (a) => ("Surface Area: " + 6*a*a);
const volume = (a) => ("Volume: " + a*a*a);

const calculate = (a, callback) => {
    if(typeof a !== "number"){
        return "a must be number";
    }
    return callback(a);
}

console.log(calculate(4,area));
console.log(calculate(4,perimeter));
console.log(calculate(4,surfaceArea));
console.log(calculate(4,volume));

