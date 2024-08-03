// Immediately Invoked Function Expressions (IIFE)

// we use iife to remove the global scope pollution
//syntax -> (function)(function call); *we have to end the iife by semicolon because it dosent know where to stop it

(function dbcall(){               // named iife
    console.log(`DB connected`);
})();

(() => {                                  // unnamed iife OR iife eith arrow function
    console.log(`DB connected two `);
})();

// iife with parameters
((name) => {
    console.log(`my name is ${name}`);
})("yashank");