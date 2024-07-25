const marvel_heros = ["thor", "ironman", "hulk"]
const dc_heros = ["superman", "batman", "flash"]

marvel_heros.push(dc_heros) // whatever we give input it pushes as a single element , works on original array
console.log(marvel_heros);
marvel_heros.pop();

let arr = marvel_heros.concat(dc_heros) // returns the new array , limitation only pass single array
console.log(arr);
console.log(marvel_heros);

// **** Spread operater (kanch ka glass ligiye or drop kar digiye sab spread ho jayenge)
const new_heros = [...marvel_heros , ...dc_heros]
console.log(new_heros);

// ****** Flat*******
const temp_arr = [1, 2, 3, [4, 6, 7] , 6 , [ 1, 2, 3, [9, 8]]]
const temp_arr2 = temp_arr.flat(Infinity) // parameter takes the Depth
console.log(temp_arr2);

//**************************************

console.log(Array.isArray("yashank"));
console.log(Array.from("yashank")); // makes array from given input
console.log(Array.from({name: "yashank"})); // it gives empty object , because we have to define from which to make array (keys or values)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));