// NOTE:- singleton objects - objects which are made using any constructors , uniqe(no copy)
// Object.create   (constructor, singleton object )


// object literals

const mysymbol = Symbol("key1")

const jsuser = {
    name: "Yashank",   // by default system treated keys as Strings
    "full name": "Yashank Lakhena", // only way to access it was [] way, can not access it by .(dot)
    age: 20,
    [mysymbol]: "mykey",// to use symbol as a key
    location: "Indore",
    email: "yashl@gmail.com",
    isLogin: false,
    LastLoginDays: ["monday", "saturday"]
}


// How to access objects?
// 1st way
console.log(jsuser.name); 

// 2nd way
console.log(jsuser["name"]); // in this we have to give keys as string
console.log(jsuser["full name"]);
console.log(jsuser[mysymbol]);// to access symbol key

//*************************

//console.log(jsuser);
jsuser.location = "mumbai"
//Object.freeze(jsuser)// it freeses the object values cant be changed after this
jsuser.location = "delhi"
console.log(jsuser);


jsuser.greeting = function(){
    console.log("hello js user");
}

console.log(jsuser.greeting);
console.log(jsuser.greeting());