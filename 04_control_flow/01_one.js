// if

const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}


// <, >, <=, >=, ==, !=, ===, !==                    // operators used to check or compare conditions
//***********************************************************************************


const score = 200
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

//console.log(`User power: ${power}`); // can not access power 
//****************************************************************************************** */



// short notation to write if , implicit scope if-else
const balance = 1000
if (balance > 500) console.log("test"),console.log("test2");

//********************************************************************** */
// if else if leader

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}

//*********************************************************************
//logicl operators
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}