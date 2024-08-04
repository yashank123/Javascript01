// for each
// it is also a parameter of loop (type of loop) that was by default injected in array props(properties)
// it takes an Callback Function
// for-each dosent return anything

// Callback function -> no name
// arr.forEach((item, index, arr) => {   callback function can have 3 parameters
//      console.log(item, index, arr)
//    })

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
} )

coding.forEach( (item) => {           // arrow function as callback function
    console.log(item);
} )

function printMe(item){               // external function as callback function
    console.log(item);
}

coding.forEach(printMe)                // only give name(reference) of callback function in case of external function

coding.forEach( (item, index, arr)=> {   // callback function can have 3 parameters
    console.log(item, index, arr);
} )


//********************************************************************** */
//for-each on array of objects

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

//************************************************************* */
const values = coding.forEach( (item) => {
    //console.log(item);
    return item             // foreach does not return anything
} )

console.log(values);             // undefined, as foreach does not return anything

