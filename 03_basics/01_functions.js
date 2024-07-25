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