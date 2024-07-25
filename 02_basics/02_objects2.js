// const tinderUser = new Object() // singleton object
const tinderUser = {} // object literal

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLogin = false

//console.log(tinderUser);

const anotherUser = {
    email: "some@gmail.com",
    fullname: {              // object inside object , object nesting
        userfullname:{
            firstname:"yashank",
            lastname: "lakhena"
        }
    }
}

console.log(anotherUser);
console.log(anotherUser.fullname.userfullname.firstname);

//**********************************************
// object copy

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

const temp = {obj1 , obj2}
console.log(temp);
console.log(typeof temp);

//const obj3 = Object.assign(obj1, obj2) // 1st parameter is target, after tal all are source
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

const obj4 = {...obj1, ...obj2}
console.log(obj4);

//******************************************

console.log(Object.keys(tinderUser)); // array of keys
console.log(Object.values(tinderUser)); // array of values
console.log(Object.entries(tinderUser)); // array of entries

console.log(tinderUser.hasOwnProperty('login'));


