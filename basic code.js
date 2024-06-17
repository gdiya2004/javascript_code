// //node -v
// //node file.js
// console.log("Diya")
// const accountId=23124032 //to declare a constant, const keyword,value cannot be changed
// let accountEmail="192004gupta@gmail.com" //to declare a variable,memory mein space is assigsned 
// var accountPassword ="12345"
// let accountState;
// accountCity="Jaipur"//variable can be declared in this way
// accountEmail="Diya@"
// accountPassword="namu"
// accountCity="Hoshiarpur"
// accountId=2
// console.log(accountId);//TypeError if const keyword ki value is changed

// console.table([accountEmail,accountId,accountPassword,accountCity])

// variable can be declared by var,let but let is used becoz var has scope problem
 /*Prefer not to use var becoz of issue in block scope and functional scope*/
 //if variable is just declared but not assigned value then its output is undefined

 //Data Types:
 "use strict";// treat all JS code as newer version
//  alert("hello") //referenceError: alert is not defined
// let name="diya"
// let age=19
// let isLoggedIn=false

//number=>2 to power 53
//bigint
//boolean=>true/false
//string="",''
//none=>standalone value khali hai can be assigned value
//undefined=> value not assigned
//symbol=>uniqueness

//object

// console.log(typeof age)//number
// console.log(typeof null) //object is data type of null
// console.log(typeof undefined) //undefined is data type of undefined
// console.log(typeof 'Diya')//string
// console.log(typeof diya)//undefined

// let score=32
// console.log(typeof score)
// console.log(typeof (score))
// //output will come in Smallcase letters i.e.number
// let valueNumber=Number(score) //for type casting we need to write it in capital
// console.log(typeof valueNumber)

// let sc_ore="32anv"
// let valueNumber_=Number(sc_ore) //for type casting we need to write it in capital
// console.log(valueNumber_) //NaN
// console.log(typeof valueNumber_)

// let score1=null
// let value_Number_=Number(score1) //for type casting we need to write it in capital
// console.log(value_Number_) //0
// console.log(typeof value_Number_)//number

// let score_=undefined
// let value_Number=Number(score_) //for type casting we need to write it in capital
// console.log(value_Number) //NaN
// console.log(typeof value_Number)//number

// let score2=true
// let valueNumber1=Number(score2) //for type casting we need to write it in capital
// console.log(valueNumber1) //1 false per 0 will come
// console.log(typeof valueNumber1)

// let score3="diya"
// let value_Number1=Number(score3) //for type casting we need to write it in capital
// console.log(value_Number1) //NaN
// console.log(typeof value_Number1)

// let isLoggedin=""
// let booleanis=Boolean(isLoggedin)
// console.log(booleanis)//false

// let isLoggedin="diya"
// let booleanis=Boolean(isLoggedin)
// console.log(booleanis)//true

// let isLoggedin=1
// let booleanis=Boolean(isLoggedin)
// console.log(booleanis)//true

// let isLoggedin=33
// let booleanis=String(isLoggedin)
// console.log(booleanis)
// console.log(typeof booleanis)

//operations:
// let value=3
// let negvalue=-value
// console.log(negvalue)

// let str1="hello"
// let str2="Diys"
// let str3=str1+str2
// console.log(str3)

/*very confusing*/
// console.log("1"+2);//12
// console.log(1+"2");//12
// console.log("1"+2+2);//122
// console.log(1+2+"2");//32
// console.log(2+"1"+2);//212
// console.log(true)
// console.log(+true)//1
// console.log(true+)//Error
// console.log(+"")//0

// let num1, num2, num3
// num1=num2=num3=2+2

// let counter=100
// counter++ //preincrement and post increment
// console.log(counter)

//comparison:
// console.log('2'>1)//true
// console.log('02'>1)//true
// console.log(2<"john")//false
// console.log(2=="john")//false

//equality check == and compariosn <>>= act differentlyu.
//  comparisons convert null to number,0
// console.log(null>0)//false,0>0
// console.log(null==0)//false
// console.log(null>=0)//true,0>=0 

//  gives false in all cases
// console.log(undefined==0)
// console.log(undefined>=0)
// console.log(undefined<=0)

/// ===
// console.log("2"===2)

//data types:primitive and non primitive based how data is kept in memory and accessed
//Primitive data type:call by value, changes are done in copy,7types
//String,number,null,boolean,undefined,symbol,bigInt
//Non Primitive or Reference type:memory mein reference allocate kiya jata hai,arrays+object+functions
//javascript is dynamic or static:
// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
// const score=100
// const scoreValue=100.3
// const isLoggedin=false
// const outsideTemp=null
// let userEmail

// const id = Symbol('123')
// const anotherid = Symbol('123')
// console.log(id)
// console.log(anotherid)
// console.log(id==anotherid)//returns different value
// console.log(id===anotherid)

// let id1 = Symbol('123')
// let anotherid1 = Symbol('123')
// console.log(id1)
// console.log(anotherid1)
// console.log(id1==anotherid1)//returns different value
// console.log(id1===anotherid1)

// const bigNum=3456789234152637
// console.log(typeof bigNum)//number

// const bigNum=3456789234152637n
// console.log(typeof bigNum)//bigint

// const heroes=["shaktiman","naagraj"]//array

//stack and heap:2 types of memory
//Stack(Primitive)-->copy milti hai,
// heap(non-primitive)-->reference milti hai

//example of stack():primitive,copy is created
// let myYoutubename="diya.com"
// let anothername=myYoutubename//copy will be created
// anothername="khyati.com"
// console.log(anothername)//khyati.com
// console.log(myYoutubename)//diya.com

// //example of heap:reference,non-primitive
// let user1={
//     email:"19gupta@.com",
//     upi:"diya@ybi"
// }
// let user2=user1//same reference of user1
// user2.email="khyati@"
// console.log(user2.email)//khyati@
// console.log(user1.email)//khyati@

//strings:string and any other data type can be concatenated 
// const name="Diya"
// console.log(name[0])
// const repo=5
// console.log(name+repo)

// //string interpolation:things can be done on go
//use back ticks and dollar
// console.log(`Hello my name is ${name} and repo are ${repo}`)

// let name="diya";
// console.log(typeof name);//string

//decalaration of string: new is keyword

//craetes string object instead of primitive string
const gameName = new String('Diya'); // Creates a string object
// const gameNamePrimitive = 'Diya';    // Creates a string primitive

// console.log(gameName);               // Outputs: [String: 'Diya']
// console.log(gameNamePrimitive);      // Outputs: Diya

// console.log(typeof gameName);        // Outputs: object
// console.log(typeof gameNamePrimitive); // Outputs: string

// console.log(gameName == gameNamePrimitive);  // Outputs: true
// console.log(gameName === gameNamePrimitive); // Outputs: false

// console.log(typeof gameName)//object
// console.log(gameName[0])
// console.log(gameName.__proto__)//returns object
// console.log(gameName.length)
// console.log(gameName.toUpperCase())//doenot changes original string as copy is created in stack.
// console.log(gameName)//original remains same
// console.log(gameName.charAt(0))
// console.log(gameName.indexOf('y'))

//substring(:)-->doenot takes negative values. 
// if start=neg then it will be 0 and if end==neg then no output
//substring--> negative ko 0 kr deti and start>end toh swap kr deti
// const newString=gameName.substring(0,2)//slicing
// const newString2=gameName.substring(-3,2)//negative no.-->0
// const newString3=gameName.substring(0,-1)//doenot works (0,0)
// const newString4=gameName.substring(1,-1)//prints1 charactyer (1,0)-->(0,1)
// const newString5=gameName.substring(2,-1)//prints 2 characters
// const newString6=gameName.substring(-2,-1)//kuch nhi aana
// const string_=gameName.substring(3,0);//swaps
// console.log(string_);
// console.log(newString)
// console.log(newString2)
// console.log(newString3)
// console.log(newString4)
// console.log(newString5)
// console.log(newString6)
// console.log(gameName.substring(0,2))

//slice(,)-->negative index can be cpassed
// const anotherstrr=gameName.slice(-2,3)//slicing:negative values ccan be passed
// console.log(anotherstrr)

//trim() method:removes end and starting !!!whitespaces!!!
// const newSriingone="    diya     "
// console.log(newSriingone)
// console.log(newSriingone.trim())

//replace('search vlaue','new value'):
// const url="https://diya.com"
// console.log(url.replace('y','t'))//no change in original.
// console.log((url))
// console.log(url.includes('diya'))//true 
// console.log(url.includes(2))//false

//split(separator,limit) --> array
// const NaME="diya-khyati"
// console.log(NaME.split('-'))//array

// const friend="baanigaaarg"
// console.log(friend.split('a',2))

//to specify it with number object;
// const balance_ = new Number(100)
// console.log(balance_);
// console.log(typeof balance_) //object
// console.log(balance_.toString());
// console.log(typeof balance_) //object
// console.log(balance_.toString().length);
// console.log(balance_.toFixed(2))
// console.log(typeof balance_) //object

// const otherNumber_ =1123.8966;
// console.log(otherNumber_.toPrecision(3));
// console.log(typeof otherNumber_)

// const hundereds_ =1000000
// console.log(hundereds_.toLocaleString('en-IN')) 


//date and time in js:
// Date object represent a single moment in a time in independent format
// let myDate=new Date()
// console.log(typeof myDate)//object
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())//same as ISO
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

//new keyword is used to create an instance of an object that has constructor function
// Date(Year,Month,Date,hour,minute,second) :Month starts from 0
// let myCreateDate=new Date(2023,0,23,5,3)
// console.log(myCreateDate)
// console.log(myCreateDate.toDateString())
// console.log(myCreateDate.toLocaleDateString())
// console.log(myCreateDate.toLocaleString())

// let CreatedDate=new Date("2023-01-14")//Y-D-M
// console.log(CreatedDate.toLocaleString())

// let CreteDate=new Date("14-01-2023")//invalid:D-M-Y
// console.log(CreteDate.toLocaleString())


// let Create2Date=new Date("14-2023-01")//invalid:D-Y-M
// console.log(Create2Date.toLocaleString())

// let CreatDate=new Date("01-14-2023")//M-D-Y
// console.log(CreatDate.toLocaleString())
// console.log(CreatDate.toLocaleDateString())

// let myTimeStamp=Date.now()//or new date.now()
// console.log(myTimeStamp)//in millisecond
// console.log(CreatDate.getTime())//in millisecond
// console.log(Math.floor(Date.now()/1000))//in seconds

let newDate=new Date()
// console.log(newDate.getMonth())//0-->january
// console.log(newDate.getDay())//0-->sunday

// newDate.toLocaleString('default',{weekday:"long",})
// console.log(newDate)

// const score= 400
// const balance =new Number(100)
// console.log(balance)
// console.log(score)
// console.log(typeof score)//number
// console.log(typeof balance)//object
// console.log(balance.toString())
// console.log(typeof balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))//precision value numbers after point

// const othewrnum=23.8966
// console.log(othewrnum.toPrecision(3))// number of significant figure i.e. 3 are number of significant figures
// console.log(typeof othewrnum);//number
// const othewrnum2=123.8966
// console.log(othewrnum2.toPrecision(3))//number of significant figure i.e. 3 are number of significant figures

// const fivenum=125.535 //last agr five hai toh second last no. if even gets added by one otherwise remains same
// console.log(fivenum.toPrecision(5))

// const exp=1123.8966
// console.log(exp.toPrecision(3))

// const hundereds=100000
// console.log(hundereds.toLocaleString('en-IN'))

// console.log(typeof Number)//in-built function
// console.log(typeof Number(2))//number
// let num=new Number(2)
// console.log(typeof num)//object

// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)

//++++++++++++++++++++++++++++++++     Math
// console.log(Math)//object
// console.log(Math.abs(-4))//absolute value
// console.log(Math.round(4.5))//round off 5
// console.log(Math.round(3.5))//4
// console.log(Math.ceil(4.2))
// console.log(Math.floor(7.8))
// console.log(Math.min(4,3,6,8))
// console.log(Math.random())//always value will be bw 0 and 1
// console.log(Math.floor(Math.random()*10)+1)//minimum value will come 1

//range formula:
// const min=10
// const max=20
// console.log(Math.floor(Math.random() * (max-min+1)+min))//max-min-->gives range ,+1-->to avoid 0 ,+min-->to get minimum value

//arrays : heterogeneous_elements + object + resizable + array always make shallow copy
// const myArr=[1,2,3,8,9]//declaration
// const myHeroes=["a","v","b"]//decalaration
// const myArr2=new Array(1,2,3,4)//decalaration
// console.log(typeof myArr)//object
// console.log(myArr[0])
// console.log(myArr.length)//property

//shallow copy:same reference point
//deep code:donot have same reference

//array methods:
const myArr=[1,2,3,8,9]//declaration

// returns length:Push(piche se element add krna),unshift(aage se element add krna)
// return element:shift(removes first element),pop(removes last elemnet)

// myArr.push(6)
// console.log(myArr.push(6))//returns no. of elements ie new lenth of array
// console.log(myArr)

// myArr.pop()
// console.log(myArr.pop())//retrns element popped
// console.log(myArr)

// myArr.unshift(0)//element is added at start of array
// console.log(myArr.unshift(0))//returns new length and adds one more elemnt
// console.log(myArr)

// myArr.shift()//first element is removed
// console.log(myArr.shift())//prints element removed and also removes 1 more element
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(typeof myArr.includes(9))//boolean
// console.log(myArr.indexOf(4))//returns -1 if element is not present
// console.log(typeof myArr.indexOf(9))//number

//string-->array by split('',max=splits)
//array-->string by join()
// const newArr=myArr.join()//converts new srray into string
// console.log(myArr)
// console.log(typeof myArr)
// console.log(typeof newArr)
// console.log(newArr)


//slice/splice:
// const myArr=[1,2,3,8,9]//declaration
// console.log("A",myArr)

//slice() donot changes original array and doennot includes end
// const myn1=myArr.slice(1,3)//returns array from range (1,3)
// console.log(myn1)
// console.log("B",myArr)//array remains same

//splice() changes original array and includes last index-->end
// const myn2=myArr.splice(1,3)
// console.log(myn2)
// console.log("C",myArr)//array changes

// const marvel=['Thor','ironman','spiderman']
// const dc=['superman','flash','batman']

// marvel.push(dc)//dc is pushed as list in marvel
// console.log(marvel)
// console.log(marvel[3][1])
// console.log(dc)

// const heroes=marvel.concat(dc)//modifies new array but doenot bring change in original aaryas
// console.log(heroes)
// console.log(marvel)
// console.log(dc)
                                               //or//
//spread:
// const all_heroes=[...marvel , ...dc]//more than 2 values we can give
// console.log(all_heroes)

//code to flatten list:
// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array=another_array.flat(Infinity)//takes value of depth
// console.log(real_another_array)

//string-->array split()
//array -> string join()
//from() expects an array-like or iterable object.
// A single number is neither array-like nor iterable.
// console.log(Array.from(2));
// console.log(Array.isArray("Diya"))//false
// console.log(Array.from("Diya"))//convert Diya into Array
// console.log(Array.from({name:"Diya"}))//returns empty array as not knowing whether to make array of names(key) or diya(value)


//from converting into array use split,Array.from(''),Array.of(,,,)
// let score1=100
// let score2=200
// let score3=300
// console.log(Array.of(score1,score2,score3))//returns new array from set of elements

//in js, const declares a variable that cannot be reassigned 
// but it doenot mean the value itself is immutable. 
// For primitive types number or string you cannot reassign variable to refer to different value,
// but u can modify its value itself if it is mutable like array/object






































































































































