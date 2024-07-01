// if(2=="2"){
//     console.log("diya")
// }

// if(2==="2"){
//     console.log("diya")
// }

//donot prefer such a short hand
// const balance=1000
// if(balance>500) console.log("test"),console.log("test2");

// if(balance<500){
//     console.log("less than 500")
// } else if(balance<750){
//     console.log("less than 750")
// }
// else(console.log("1000"))

// &&     || are logical operators
// const userLoggedIn=true;
// const debit=true
// if(userLoggedIn && debit){
//     console.log("diya")
// }


//switch and case 
// switch(key){
//     case value_:
//     break;

//     default:
//         break;
// }

// const month=5
// switch(month){
//     case 1:
//         console.log("J")
//         break;
//     case 3:
//         console.log("M")
//         break;
//     default:
//         console.log("default")
//         break;
// }

// const month="jan"
// switch(month){
//     case "jan":
//         console.log("J")
//         break;
//     case "mar":
//         console.log("M")
//         break;
//     default:
//         console.log("default")
//         break;
// }


//true values -->[] empty array , "0", 'false' ," " ,{} empty object , function(){}--> empty func
//false values --> false , 0 , -0 , BigInt 0n , null , undefined , NAN , ''(empty string)

//to check if array is empty
//empty arrar is treu value
// const myArray=[]
// if(myArray){
//     console.log("Array is empty and a true value")
// }

//prefer this array.length
// if(myArray.length===0){
//     console.log("Array is empty and a true value")
// }

//to check if object is empty
// const emptyObj={}
// if (emptyObj){
//     console.log("Obje is empty and a true value") 
// }
// if(Object.keys(emptyObj).length===0){
//     console.log("Obje is empty and a true value")
// }


//Nullish Coalescing Operator (??) :null undefined

// let val1;
// val1=5 ?? 10;
// val1=null ?? 10
// val1=undefined ?? 15
// val1 = null ?? 10 ?? 20
// val1=null ?? undefined//undefined
// console.log(val1)

//Terniary Operator:
// condition? true :false;


//for loop:
// const arr=[1,2,3]
// const n= arr.length
// for(let i=0; i<n; i++){
//     const ele=arr[i]
//     console.log(ele)
// }


// while(condition){

// }

//do{
// }while();



//array specific loops: for of , for in , forEach(item,index,array)
// ["",""]   [{},{}]

//for of
// for(const iterator of object){

// }

// const arr=['a','n','m']
// for(const num of arr){
//     console.log(num);
// }

// for(const key of arr){
//     console.log(key)
// }
//key-->indexes
// for(const key in arr){
//     console.log(key)
// }

// const greetings="Hello world"
// for(const greet of greetings){
//     console.log(greet)
// }

//Maps: object holds key-value pairs 
//remembers insertion of order of keys
//any data type can be used as key or value
//no duplicate values

// for-of in map
// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"united states")
// map.set('IN',"India")
// console.log(map)
// for(const key of map){
//     console.log(key)
// }

// for(const [key,value] of map){
//     console.log(key, " ->", value)
// }

//for-of in object:
//this syntax doenot works in object:
const myObject={
    'game1':'NFSS',
    'game2':'Spiderman',
}
// const myObject={
//     game1:'NFSS',
//     game2:'Spiderman',
// }
for(const key of myObject){
    console.log(key)
}

//for-in --> object
// const myObject={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
// }
// for(const key in myObject){
//     console.log(key)
// }
// for(const key in myObject){
//     console.log(myObject[key])
// }

//for in --> arrays:
// const languages=["js","c++"]
// for(const language in languages){
//     console.log(languages[language])
// }

//keys are indexes in arrays
// for(const key in languages){
//     console.log(key)
//     console.log(languages[key])
// }

// for in -->map  
//nothing gets printed
// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"united states")
// map.set('IN',"India")
// for(const key in map){
//     console.log(key)
// }

//array.forEach loop:
//call back function donot have name

//1
// const coding=["j","ruby","c++"]
// coding.forEach( function (item) {
//     console.log(item)
// })

//2
// coding.forEach((val) => {
//     console.log(val)
// })

//3
// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)//give function ka reference

//4 access to element, index and array
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

//5
// const MyArray=[{
//     languageName:"javascript",
//     langfile:"js",
// },{
//     languageName:"javas",
//     langfile:"j",
// },{
//     languageName:"ja",
//     langfile:"jsa",
// }]
// MyArray.forEach((item) =>{
//     console.log(item.languageName)
// })

//summary:
//for of loop works for arrays and map
//for in works for objects and arrays. key in for in returns indexes.

//forEach returns undefined i.e. donot return any value even if written return
// const coding=["js","ruby"]
// const values= coding.forEach((item)=> {
//     console.log(item)
// })
// console.log(values)//undefined

//filter function
// const myNums=[1,2,3,4,5,6,7,8]
// const newnums=myNums.filter((num)=> num>4)
// console.log(newnums)

//if used curly braces use return keyword
//array.filter(()=> condition)
//returns array
// const newnums=myNums.filter((num)=> {
//     return num>4
// })
// console.log(newnums)

// const myNums=[1,2,3,4,5,6,7,8]
// const newnums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
// })
// console.log(newnums)

//array of objects
// const books=[{title:"book1",genre:"history",publish:"2009",edition:2017},
//     {title:"book1",genre:"history",publish:"2009",edition:2017}
// ]
// const userbooks=books.filter((bk)=> bk.genre==='geo')
// console.log(userbooks) 

// const myNums=[1,2,3,4,5]
// const newnums=myNums.map((num)=> num+10)
// console.log(newnums)

// const newnums=myNums.map((num)=> {
//     return num+10
// })
// console.log(newnums)

//chaining
// const myNums=[1,2,3,4,5]
// const newnums=myNums.map((num) =>num*10).map((num)=>num+1).filter((num)=>num>=40)
// console.log(newnums)


//reduce method: accumulator ,item
// const array1=[1,2,3,4]
// const ini_val=0;
// const sum=array1.reduce(
//     (accumulator,currentvalue)=> accumulator + currentvalue,
//     initialvalue
// );

//1
// const mynums=[1,2,3]
// const myTotal=mynums.reduce((acc,currval)=>{
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc+currval
// },0)//0 is initail value of accumulator
// //afterwards return value is taken by accumulator
// console.log(myTotal)

// const myTotal=mynums.reduce((acc,curr)=>acc+curr,0)
// console.log(myTotal)

//2
// const shoppingcard=[
//     {
//         itemName:"js",
//         price:299,
//     },
//     {
//         itemName:"ds",
//         price:1299,
//     },
//     {
//         itemName:"c++",
//         price:599,
//     }
// ]
// const total= shoppingcard.reduce((acc,item)=>acc+item.price,0)
// console.log(total)