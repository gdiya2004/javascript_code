//object literal:

// const user={
//     username:"diya",
//     lohinCount:0,
//     signedIn:true,
//     getuserdetails:function(){
//         // console.log("done");
//         // console.log(`username=${this.username}`)
//         console.log(this);
//     }
// }
// console.log(user.getuserdetails());
// console.log(this)//{} but chrome mein Window object milta hai.

//Constructor function: har baar naya instance deta
//new keyword is constructor function: allows to form multiple instances from 1 object literal.
//naya context bnane ke kaam aata hai
// const user=new Object();
//1. jb new keyword use krte hain toh empty obj banta hai jise instances kehte hain.
//2. new keyword calls constructor function-> all arguments are packed in it and give.
//3. all arguments get injected
//4.arguments mil jaaate hain

//this is object;
function user(username,logincount,isloggedIn){
    this.username=username;
    this.logincount=logincount;
    this.isloggedIn=isloggedIn;
    return this;
}

//even if we have not printed userdetails2 userdetails1 are changing
// const userdetails1=user("diya",2,true);
// const userdetails2=user("namu",9,true);
// console.log(userdetails1)

//imporatance of new keyword:forms a new instance
// const userdetails1= new user("diya",2,true);
// const userdetails2=new user("namu",9,true);
// console.log(userdetails1);
// console.log(userdetails2);

//return this impliucitly define hi hota hai.
// function user(username,logincount,isloggedIn){
//     this.username=username;
//     this.logincount=logincount;
//     this.isloggedIn=isloggedIn;
//     this.greeting=function(){
//         console.log(`welcome! ${this.username}`)
//     }
// }
// const userdetails1= new user("diya",2,true);
// const userdetails2=new user("namu",9,true);
// console.log(userdetails1);
// console.log(userdetails2);

function user(username,logincount,isloggedIn){
    this.username=username;
    this.logincount=logincount;
    this.isloggedIn=isloggedIn;
    this.greeting=function(){
        console.log(`welcome! ${this.username}`)
    }
}
const userdetails1= new user("diya",2,true);
console.log(userdetails1.constructor);//reference of yourself

//instanceof:
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   const auto = new Car('Honda', 'Accord', 1998);
  
//   console.log(auto instanceof Car);

//   console.log(auto instanceof Object);