
//function function bhi hai aur object bhi hai.
function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power=2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);//{}

function createUser(username,score){
    this.username=username;
    this.score=score;
}
createUser.prototype.increment=function(){
    this.score++; //current context ka kaam krega
}
createUser.prototype.print=function(){
    console.log(`score is ${this.score}`) //current context ka kaam krega
}
//
// const chai=createUser('chai',25);
// const tea=createUser('tea',250);
// chai.print()// cannot read the properties of print undefined

//importance of new;
const chai= new createUser('chai',25);
const tea=new createUser('tea',250);
chai.print();

/*behind the scene of new keyword:
1. A new obj is created. the new keyword initiates the creation of new JS obj.
2. A Prototype is linked: the newly created obj gets linked to prototype property of constructor function.
this means that it has access to properties and methods definrd on constructor prototype
3. the constructor is called: */


