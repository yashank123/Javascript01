// for in 
// mostly used on objects
// it gives keys(indexes)

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

//****************************************************************** */
// arrays
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key); // it print keys i.e. indexes of array
}

for (const key in programming) {
    console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) { // map was not iterable
    console.log(key); 
}