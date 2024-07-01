//hum apna method bna sakte hain. jo prototype hum object ko denge vo sabke liye accessible hoga
//object is just like parent of all

let myName="diya     "
console.log(myName.trim().length);

// this method is accessible for all strings.
String.prototype.truelength=function(){
    console.log(`${this}`);//diya
    console.log(`true length = ${this.trim().length}`)
}
// console.log(myName.truelength());//kya main method apna bna sakte hain?
// "DIYA".truelength();
// "icetae".truelength(); 

let myHeroes=["thor","spider"];//array

//object
let heroPower={
    thor:"hammer",
    spider:"slinbg",
    getSpiderPower:function(){
        console.log(`${this.spider}`);
    }
}

// Object.prototype.diya=function(){
//     console.log(`Diya is present in all objects`)
// }
// heroPower.diya();
// myHeroes.diya();//array ke pass bhi method chla gaya

// Array.prototype.heyDiya=function(){
//     console.log('hi');
// }
// heroPower.heyDiya();//object ke pass access nhi hai array ke merthod ka
// myHeroes.heyDiya();//array can only access

//inheritance:
const user={
    name:"diay",
    email:"@gmail.com",
}

const teacher={
    makeVideo:true
}
  
const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssign:'js',
    fullTime:true,
    // __proto__: TeachingSupport
}
// console.log(TASupport.isAvailable);//false

// teacher.__proto__=user;

//modern:
//setPrototypeof is same as__proto__

//teaching support accesses the values of teacher
Object.setPrototypeOf(TeachingSupport,teacher)
console.log(TeachingSupport.makeVideo);//true
