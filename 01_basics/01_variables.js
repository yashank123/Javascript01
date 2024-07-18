 let a = 10;
 let b = 20;

 var c = 30;
 var d = 40;

 console.log(a);
 console.log(b);
 console.log(c);
 console.log(d);

//  let a = "a variable changed";
//  console.log(a);       
// cannot redecleare let variables (block scope)

var c = "c variable changed";
console.log(c);
// we can redecleare var variables

const cn = 12345;
console.log(cn);

console.table([a, b, c, d, cn]);