// Dates

let mydate = new Date() // date object/instance
console.log(mydate);
console.log(typeof mydate);

console.log(mydate.toString());
console.log(mydate.toDateString()); // eassy to unserstand 
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());//useful
console.log(mydate.toLocaleTimeString());

//let myCreateDate = new Date(2024, 0, 23)
//let myCreateDate = new Date("2024-01-14")
let myCreateDate = new Date("01-14-2024")
console.log(myCreateDate.toDateString());

//********** Time ************* */

let myTime = Date.now()//give miliseconds from 1 jan 1970
console.log(myTime);
console.log(myCreateDate.getTime());
console.log(myCreateDate.getMonth() + 1);// months starts fro 0
console.log(myCreateDate.getDay());