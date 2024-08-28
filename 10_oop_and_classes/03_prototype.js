// default behaviour of javascript is prototypal behaviour
// new, this, class all working on prototype

// prototypal behaviour -> harr nahi manna / prototypal inheritance

// prototype -> functions + some internal properties

let myName = "Yashank     "
let mychannel = "chai     "

console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){               // injecting prototype in objects/highest herarchy(directly injected in arrays, fun, obj)
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()         // not work as heyHitesh() prototype is for array not for objects (described for child so not work in parent but if described in parent will work for child)

//********** inheritance ******************************* */