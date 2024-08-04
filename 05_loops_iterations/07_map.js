// map 
// it returns new array

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//newNums = myNumers.map( (num) =>   num + 10)
let newNums = myNumers.map( (num) => { return num + 10})    // if we uses curley brackets {}, then we have to write return.
// newNums = myNumers.map( (num) =>   console.log("yashank"))  // my experiment
console.log(newNums);


//****************************************************************** */
// chaining
newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);