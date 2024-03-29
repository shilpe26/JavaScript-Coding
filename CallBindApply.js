const myName = {
    firstname: 'Varun',
    lastname: 'Verma'
}

const printFullName = function(city, state){
    console.log(this.firstname + " " + this.lastname + " from " + city + ", " + state);
}

// function borrowing
printFullName.call(myName,'Gorakhpur','state');
printFullName.apply(myName,['Gorakhpur','state']);

// bind method
const myFullName = printFullName.bind(myName,'Gorakhpur','state');
console.log(myFullName)
console.log(myFullName())