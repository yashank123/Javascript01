// IMP NOTE -> global scope is different in browser and in node (any other environment )

var c = 300
let a = 999

if(true){ // inside this block is block scope
    let a = 10
    const b = 20
    var c = 30 // value of c becomes 30 as we can redecleare var , sometime it creates problem
}

//console.log(a); // gives error as block scope a is not accessable
//console.log(b); // gives error as block scope b is not accessable
console.log(c);
console.log(a);

function one(p) {
    const username = "yashank"

    function two(){
        const website = "youtube"
        console.log(username); // child can access parent scope
    }

    //console.log(website); // givea error as parent function not have child scope
    two()
}

one()

// hoisting works different/not works in function expression