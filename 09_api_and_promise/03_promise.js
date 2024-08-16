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

promiseFour.then((user) => {
    console.log(user);
    return user.name
}).then((username) => {
    console.log(username);
}).catch(function(error){   // .catch is connected with reject (same as .then & resolve)
    console.log(error);
}).finally(() => console.log("promise is either resolved or rejected"))             // after a given amount of time it tells us what happens finally & always executed

//******************************************************************************************************************** */
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123456"})
        }
        else{
            reject('ERROR: js went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){    // if we know that there will be no error then no use of try catch
                                        // but if there is error/promise is rejected then use try catch
    try{
        const response = await promiseFive  // await on promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);               // this time promise is rejected so we have to use catch
    }
}

consumePromiseFive()

//************************************************************************************************************ */
// async function getAllUsers(){
//     try{
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users')  // fetch returns a promise
//         //console.log(responce);
    
//         const data = await responce.json()   // to convert into json will take time so we applied await
//         console.log(data);
//     }
//     catch(error){
//         console.log("E:", error);
//     }
// }

// getAllUsers()


//*********        above function in .then formate        ******************/
fetch('https://api.github.com/users/hiteshchoudhary')   // fetch returns a promise
.then((responce) => {
    return responce.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

//******************************************************************* */
// promise.all  to read

// in fetch() the call is stored in special priority/fetch queue which will executed 1st
