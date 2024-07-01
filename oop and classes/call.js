// function SetUserName(username){
//     //complex DB calls
//     this.username=username;
//     console.log("called");
// }
// function createUser(username,email,password){
//     SetUserName(username)//call ho rha just reference gya hai.
//     this.email=email
//     this.password=password
// }
// const chai= new createUser("diya","@gmail.com","123")
// console.log(chai);//username nhi de rha tha

//abhi bhi username print nhi hoga
// function SetUserName(username){
//     //complex DB calls
//     this.username=username;
//     console.log("called")
// }
// function createUser(username,email,password){
//     SetUserName.call(username) //call krke uska reference hold krke rkhna hai

//     this.email=email
//     this.password=password
// }
// const chai= new createUser("diya","@gmail.com","123")
// console.log(chai);

//username porint ho gya:
// function SetUserName(username){
//     //complex DB calls
//     this.username=username;
//     console.log("called")
// }
// function createUser(username,email,password){
//     SetUserName.call(this,username) //call krke uska reference hold krke rkhna hai 
//   //current execution context hai vo kisi aur function ko pass kr deta
//     this.email=email
//     this.password=password
// }
// const chai= new createUser("diya","@gmail.com","123")
// console.log(chai);
