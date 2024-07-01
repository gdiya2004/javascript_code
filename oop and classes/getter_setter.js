//getter setter in class


//getter ke saath setter bhi define krna hi padega
//getter settre properties pr lagte hai vo auto method bn jaate hain.

//Setter is called during instance creation to set the initial password (this.password = password;).
// Getter is called when you access diya.password to retrieve the password with "diya" appended.

//constructor bhi value ko set kr rha hai aur setter bhi set kr rha hai.
//Maximum call stack exceed
// class User{
//     constructor(email,password){
//         this.email=email;
//         this.password=password;
//     }
//     get password(){
//         return this.password.toUpperCase()
//     }
//     set password(value){
//         this.password=value.toUpperCase();
//     }
// }
// const diya=new User("@gmail.com","abc")
// console.log(diya.password);

//solution of it:
//constructor values set toh kr rha hai pr password ki values overwrite ho gyi hai due to getter-setter
// class User{
    // constructor(email,password){
//         this.email=email;
//         this.password=password;
//     }
//     get password(){
//         return this._password.toUpperCase()
//     }
//     set password(value){
//         this._password=value.toUpperCase();
//     }
// }
// const diya=new User("@gmail.com","abc")
// console.log(diya.password);


// class User{
//     constructor(email,password){
//         this.email=email;
//         this.password=password;
//     }
//     get password(){
//         return this._password.toUpperCase()
//     }
//     set password(value){
//         this._password=value;
//     }
// }
// const diya=new User("@gmail.com","abc")
// console.log(diya.password);


class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(val){
        this._email=val;
    }
    
    get password(){
        return `${this._password}diya`
    }
    set password(value){
        this._password=value;
    }
}
const diya=new User("@gmail.com","abc")
console.log(diya.password);
console.log(diya.email)