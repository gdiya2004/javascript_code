//getter setter in object

const User={
    _email:"@gmail.com",
    _password:"abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}

//default is NULL
// const tea=Object.create()

const tea=Object.create(User)
console.log(User.email)
console.log(User._email)