/*const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(typeof score); // number
console.log(typeof balance); // object

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));*/ 

//************** Maths ***************** */

console.log(Math);
console.log(Math.abs(-456));
console.log(Math.round(4.4));
console.log(Math.ceil(5.1));
console.log(Math.floor(5.9));

console.log(Math.max(1,2,3));
console.log(Math.min(1,2,3));

console.log(Math.random());// gives random number between 0 & 1
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 13;
const max = 17;

console.log(Math.floor(Math.random()*(max-min+1))+min);