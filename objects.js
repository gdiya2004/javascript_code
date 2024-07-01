//singleton :type of object constructor se singleton banta hai.

//ways to declare objects:
// object literal
//constructor:Object.create()

//object literal:
//key is auto stored as string


// const mySym=Symbol("key1")
// const JsUser={
//     name:"Diya",
//     "full name":"Diya Gupta",
//     age:18,
//     // mySym:"key1",
//     [mySym]:"key1",
//     location:"Hoshairpur",
//     email:"192004gupta@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:["Monday","sunday"]
// }
// console.log(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[email])//gives error key is auto stored as string

// console.log(JsUser["full name"])
// console.log(JsUser.full name)//cannot do in this way

//way to have symbol in object:
// console.log(typeof JsUser.mySym)//string
// console.log(typeof JsUser[mySym])//string as value stored is string
// console.log(typeof mySym)//symbol

// JsUser.email="diyag.it.23@nitj.in"
// Object.freeze(JsUser);
// JsUser.email="192004gupta@gmail.com"
// console.log(JsUser.email)

//adding function in objects:
// JsUser.greeting=function(){
//     console.log("Hello");
// }
// console.log(JsUser.greeting);//reference of function
// console.log(JsUser.greeting());// Hello 

// JsUser.greetingTwo=function(){
//     console.log(`Hello,${this.name}`);
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//constructor:singleton
// const tinderuser=new Object();//singleton object

// const tinderuser={}//non singleton object 
// tinderuser.id="123ab"
// tinderuser.name="sam"
// tinderuser.isLoggedIn=false
// console.log(tinderuser)
// console.log(Object.keys(tinderuser))//returns array of keys
// console.log(Object.values(tinderuser))//returns array of values
// console.log(Object.entries(tinderuser))//returns array of array of key and value
// console.log(tinderuser.hasOwnProperty('isLoggedIn'))//true or false

//nested objects
// const regularUser={
//     email:"@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"diya",
//             lastname:"gupta"
//         }
//     }
// }
// console.log(regularUser.fullname?.userfullname) 

// const obj1={
//     1:"a",
//     2:"b",
// }
// const obj2={
//     3:"a",
//     4:"b",
// }
// const obj3={obj1,obj2}
// console.log(obj3)

// const obj3=Object.assign(obj1,obj2)//in this case obj1 is also getting assigned
// Object.assign(obj1,obj2)//get assigned in obj1
// const obj4=Object.assign({},obj1,obj2)//preferable as in this case obj1 is not modified
// console.log(obj1);
// console.log(obj2)
// console.log(obj3)
// console.log(obj4)

//spread method
// const obj5={...obj1,...obj2}
// console.log(obj1)
// console.log(obj2)
// console.log(obj5)

//array of ojects
// const users=[
//     {
//         id :1,
//         email:"@gmail.com"
//     },
// ]
// console.log(users[0].email)

//destructuring of objects:
// const course={
//     coursename:"js in hindi",
//     price:999,
//     courseInstructor:"Diya",
// }
// console.log(course.price)
// console.log(course["price"])
// const {price:p}=course //destructuring
// // console.log(price);
// console.log(p)

//api values now days come in json first use to come in xml

//json:just like object
// {
//     "name":"diya",
//     "course":"js",
//     "price":"free"
// }

//some times api are in form of array of objects:
// [{},
//     {},
//     {},
// ]
