function SetUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)  // call -> to hold the reference of external function call 
                                      // call -> it passes the current execution context to another function 
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);