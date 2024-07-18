let score = 123;

console.log(typeof score);
console.log(typeof(score));
console.log(score);

score = "33";
console.log(typeof(score));
console.log(score);

let valueInNUmber = Number(score);
console.log(typeof valueInNUmber);
console.log(score);

score = "123abc";
valueInNUmber = Number(score);
console.log(typeof valueInNUmber);
console.log(valueInNUmber); // NaN not a number

// 1->true , 0->false , "abc"->true , ""->false