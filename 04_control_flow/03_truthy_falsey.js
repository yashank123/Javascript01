// Falsy values
// false, 0 , -0, BigInt (0n), "", null, undefined, NaN

//Truthy values
// except falsy, other values are truthy values
// "0", 'false', " ", [], {}, function(){}


// to check empty array
const userEmail = []

if (userEmail.length === 0) {
    console.log("Array is empty");
}

//to check empty object

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// false == 0 , false == '', 0==''  all gives true

//********************************************************************************************************* */
 // Nullish Coalescing Operator (??): null undefined
 // in this all are based on null and undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

//********************************************************** */
// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")