// Instance: In programming, an instance refers to a specific object created from a class.
//  It encapsulates the data (attributes) and behaviors (methods) defined in the class
// , allowing multiple objects (instances) of the same class to exist independently with their own state. 
// Instances are concrete representations of the abstract blueprint defined by the class.

class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

//use of super keyword
class Teacher extends User{
    constructor(username,email,password){
        super(username) // bhai hai User.call(this,username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`new course was accessed by ${this.username}`)
    }
}

//subclass can access the methods of superclass
const chai=new Teacher("chai","@gmail.com","123")
// chai.addCourse();
// chai.logMe();
// console.log(chai instanceof User)//true


//super class cannot access the methods of subclass
const mchai=new User("mchai");
// mchai.addCourse()
mchai.logMe()

// console.log(chai===mchai)//false
// console.log(chai===Teacher)//false
// console.log(chai instanceof Teacher)//true
// console.log(Teacher instanceof User) //false--> Teacher is subclass of User.
// console.log(chai instanceof User)//true
