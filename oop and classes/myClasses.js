//ES6

//constructor hr baar likhna jaruri nhi hai
// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return`${this.username.toUpperCase()}`;
//     }
// }

// const chai=new User("chai","@gmail.com","123");
// console.log(chai.encryptPassword());
// console.log(chai.changeusername());

//behind the scene:
function user(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
user.prototype.encryptPassword=function(){
    return `${this.password}abc`;
}

const chai=new user("chai","@gmail.com","123");
console.log(chai.encryptPassword());
