// primitive & non-primitive(Reference)

// primitive call by value , 7 types

// non-primitive(Reference)
// Arrays, Objects, Functions

// symbol makes variables unique

const id = Symbol('123');
const anotherid = Symbol('123');

console.log(id == anotherid);
console.log(id === anotherid);

const bigNUmber = 741852963789654123n; // n at last for explicit bigint

// ************* non primitives ***************

const myarr = ["rahul" , "deepak"];

let myobj = {
    name: "yashank",
    age: 20
}

const myfun = function(){
    console.log("it is a function");
}

