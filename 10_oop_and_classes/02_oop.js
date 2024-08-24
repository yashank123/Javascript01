//********       object literals           ******************/
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

//********************      constructor function       *************** */

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn                   // new is construction/constructor function gives seperate space/execution context

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this          // not neccessory implicitely emplemented in new 
}

const userOne = new User("hitesh", 12, true)            // new -> 1)new empty object created
const userTwo = new User("ChaiAurCode", 11, false)     //         2) a constructor function is called , packs all the arguments
                                                        //        3)this keyword injects all the arguments
                                                        //        4) we get the function/object


console.log(userOne.constructor);       // reference to itself
//console.log(userTwo);