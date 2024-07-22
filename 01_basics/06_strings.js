const name = "yashank"
const surname = "lakhena"

console.log(name + surname + "hello");

// string interpollation (`` back tiks)
console.log(`hello my name is ${name} and surname is ${surname}`);

let newstring = new String('wowgame')

console.log(newstring[0]);
console.log(newstring.__proto__);

console.log(newstring.length);
console.log(newstring.charAt(3));
console.log(newstring.indexOf('g'));
console.log(newstring.toUpperCase());
console.log(newstring.substring(0, 4));
console.log(newstring.slice(0, 4)); // we can also give negative values to it ex(-5, 3)

newstring = "     wowgame     ";
newstring = newstring.trim();// input ->   wow   game   , output -> wow   game
console.log(newstring);

console.log(newstring.replace('w','z')); // replaces first matching

