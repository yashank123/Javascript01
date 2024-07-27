function myname(){
    console.log("Yashank");
}

myname // reference
myname() // execution

// parameeters -> input during function defination
// arguments -> actual value give to function as an input during function call

function login(username){
    if(username === undefined){
        console.log("please enter user name");
        return
    }

    return `${username} just logged in`
}

console.log(login("yashank"));
console.log(login());

// *************************************************************
// when we have not fixed number of input
// Rest operator

function calculatePrice(val1, val2, ...num1){
    return num1
}

console.log(calculatePrice(200, 100, 400, 300, 500, 700));

//****************************************************************
// objects with functions

const user = {
    username: "yashank",
    id: 123
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and is is ${anyobject.id}`);
}

handleObject(user)
