// function add(number1,number2){//parameters
//     // console.log(number1+number2)
//     let result=number1+number2;
//     return result;
// }
// result=add(2,3)//arguments
// console.log(result);
// add(2,null)
// add(2,'3')

// function login(username="sam"){//default value can be given
//     if(username===undefined){
//         console.log("Pls enter")
//         return
//     }
//     return`${username} just logged in`
// }
// login();//undefined:if no argument passed to parameter

// ... --> spread and rest operator
// function calculateCartPrice(...num1){
//     return num1;//returns array of values
// }
// console.log(calculateCartPrice(200,400,500));

// function calculateCartPrice(val1,val2,...num1){
//     return num1;//returns array of values
// }
// console.log(calculateCartPrice(200,400,500,1000));

//object as parameter
// const user={
//     username:"diya",
//     price:199,
// }
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
// }
// // handleObject(user)

// handleObject({
//     username:"diya",
//     price:199,
// })

//array as parameter
// function returnsec(getArray){
//     return getArray[1];
// }
// const myArray=[200,400]
// console.log(returnsec(myArray))


//scope:

// if(true){
//     let a=10
//     const b=20
//     var c=30
//     d=40
// }
// console.log(a)//undefined
// console.log(b)//undefined
// console.log(c)//30 in case of var
// console.log(d)//40

//block and global scope:
// let a=300
// if(true){
//     let a=10
//     const b=20
// }
// console.log(a)//300
// console.log(b)//undefined

 //nested scope: child parent variables ko access kr sakte
//  function one(){
//     const username="diya";
//     function two(){
//         const website="youtube"
//         console.log(username)//diya
//     }
//     two()
//     console.log(website)
//  }
//  one()

//hoisting:
//another declaration of function

//1:variables can hold functions also.
//gives error if value passes befor declaration
// addtwo(3)
// const addtwo=function(num){
//     return num+2
// }

//2
//doesnot gives error if value passes befor declaration
// addtwo(3)
// function addtwo(num){
//     return num+2
// }


//This and Arrow function:

// this keyword-->refer to current context

//this in objects
// const user={
//     username:"Diya",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username} welcome to website`)
//         console.log(this)
//     }
// }
// user.welcomeMessage//reference
// user.welcomeMessage();
// user.username="sam"
// user.welcomeMessage();

// console.log(this)//refers to empty object--> {}
//browser mein give window object as it is global object

//usage of this in functions:this doenot work in functions

// function chai(){
    // console.log(this);
//     let username="diya"
//     console.log(this.username)//undefined
// }
// chai();

// const chai=function(){
//     // console.log(this);
//     let username="diya"
//     console.log(this.username)//undefined
// }
// chai();

//Arrow function:
// const chai = () =>{
    // console.log(this)//{}
    // username="diya"
    // console.log(this.username)//undefined
// }
// chai()

// //basic arrow function:
//explicit return:
// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(2,3))

//implicit return:
// const addTwo = (num1,num2) => num1+num2
// const addOwo = (num1,num2) => (num1+num2)

//it is important to put object into parenthesis
// const addTwo = (num1,num2) => {username:"diya"}
// console.log(addTwo(2,3))//undefined

// const addTwo = (num1,num2) => ({username:"diya"})
// console.log(addTwo(2,3))



//IIFE --> Immediately Invoked Function Expressions
//jo immediately execute ho jhaaye and global scope ke variable se pollution avoid krne ke liye
//semicolon  is imp to end IIFE

//named IIFE:
// (function chai(){
//     console.log(`DB CONNECTED`)
// })();
//here() ()

//named IIFE
// (function aurcode(){
//     console.log(`DB CONNECTED`)
// })();

//arrow functions in IIFE:
//unnamed IIFE and passing of parameter in it:
// ((name) => {
//     console.log(`DB CONNECTED ${name}`)
// })("diya");


