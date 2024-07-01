//jb hum ek method ka access hr kisi ko nhi de skte.... we use static keyword
//we donot want every instance fron this class to give particular method ka access.

class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username:${this.username}`);
    }
    static CreateId(){
        return "123"
    }
}

const diya=new User("diya")
// console.log(diya.CreateId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}
// const phone=new Teacher("diya","Tujgbdjbqw");
// phone.logMe();
// console.log(phone.CreateId());