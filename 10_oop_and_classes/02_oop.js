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

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/