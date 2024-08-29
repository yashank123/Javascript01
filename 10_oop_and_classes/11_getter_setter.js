class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){  // name of getter setter is same as variable name
        return this._email.toUpperCase()  // if we dosent change the variable name then a race condition will occour with constructor & execution context out error occur
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);