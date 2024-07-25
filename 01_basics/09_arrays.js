const arr = [1,2,3,4,5]
console.log(arr);
console.log(typeof arr); // object , shallow copy 

const arr2 = new Array(1,2,3,4)

// ARRAY METHODS
arr.push(6)
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(9)
console.log(arr);

arr.shift()
console.log(arr);

console.log(arr.includes(9));
console.log(arr.indexOf(3));

const newarr = arr.join() // string
console.log(arr);
console.log(newarr); // string