function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);          // function is also technically object / refers to object
console.log(multipleBy5.prototype);