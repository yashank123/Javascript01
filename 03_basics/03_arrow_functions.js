// when we want to use current context then use this keyword

const user = {
    username: "yashank",
    id: 123,

    welcomemsg: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

//console.log(user.username); 
//console.log(user.welcomemsg());
//user.welcomemsg();

console.log(this); // we are using node environment so globally current context is empty
// in browser this refers to window object(global object)


//*******************************************************

const one = function (){
    let name = "manoj"
    console.log(this);// in normal function it does not give empty object
    console.log(this.name); // undefined, as we can not use "this keyword" in functions in this way
}

one()

//**************************** Arrow function

const two = () => {
    let name = "sandeep"
    console.log(this);// in arrow functin it gives an empty object
}
two()

//**************************** 

const addnum = (num1, num2) => { // normal arrow function/explicit return arrow function
    return num1+num2
}

//const addnum = (num1, num2) => num1+num2 // emplicit return arrow function
//const addnum = (num1, num2) => (num1+num2) // also used as this , but if we uses curly brackets{} then we have to write return
//const addnum = (num1, num2) => ({uname: "yashank"}) //returns object
console.log(addnum(1,3));
