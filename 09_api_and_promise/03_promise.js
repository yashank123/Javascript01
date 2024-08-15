// the Promise object represents the eventual completion (or failure) of an
// asynchronous operation and its resulting value

// three states of promise
// 1) pending
// 2) fulfilled
// 3) rejected

// promise reduce call back hell (function in function inside function)

const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // DB calls , cryptography , network calls

    setTimeout(function(){
        console.log('async task  one 1 is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){               // .then is connected with resolve / resolve is connected with then
    console.log("promise one 1 consumed");
})

//******************************************************************************************** */
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task  two 2 is complete');
        resolve()
    }, 1000)
}).then(function(){
    console.log('promise two 2 consumed');
})

//******************************************************************************************** */
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task  three 3 is complete');
        resolve({name: "yashank", email: "yashank@gmail.com"})               // we can pass any value inside resolve & also that value can be accessed in .then
    }, 1000)
})

promiseThree.then(function(userdata){  // value which is returned by promise inside resolve is accessed inside the callback function of .then as a input parameter
    console.log(userdata);
})

//******************************************************************************************************** */
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "yashank", password: "1234"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})