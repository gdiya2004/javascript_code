// <!-- Promise object represents the eventual completion or failure of an async operation and its reulting value -->

//creation of promise
//promise ke  andr callback aata hai
// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls, cryptography,network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })

//then related to resolve:
// promiseOne.then(function(){
//     console.log("Promise consumed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })

// const promise3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"diya",email:"diya@gmail.com"})
//     },1000)
// })
// promise3.then(function(user){
//     console.log(user);
// })


//chaining:resolve reject finally
//resolve->then
//reject->catch
// const promise4=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(error){
//             resolve({username:"diya",password:"namu"})
//         }
//         else{
//             reject('ERROR: Something wrong')
//         }
//     },1000)
// })

// promise4.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>console.log("The promise is either resolved or rejected"))


// promise5=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"diya",password:"namu"})
//         }
//         else{
//             reject('ERROR: Something wrong')
//         }
//     },1000)
// })

//async directly errors ko handle nhi kr sakta;
// async function consumepromise5(){
//     const response=await promise5;
//     console.log(response);
// }
// consumepromise5();

//try catch use krna padega in async for errors
// async function consumepromise5(){
//     try{
//     const response=await promise5;
//     console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumepromise5();

// async function getAllUsers(){
//     try{
    // const response=await fetch('https://jsonplaceholder.typicode.com/users');
//     const data= await response.json();
//     console.log(data);
// // console.log(response); 
// }
//     catch(error){
//         console.log("error:",error)
//     }
// }
// getAllUsers();


//fetch method starts the process of fetching a resource from network, returning a promise (resolve/reject) i.e. fulfilled once the response is available
//fetch() promise only reject when a network error is encountered(permission related issues)
//fetch() promise does not reject on http errors (404).
//instead a then() handler must check Response.ok or Response.status.

// fetch('https://api.github.com/users/gdiya2004')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>console.log(data))
// .catch((error)=>console.log("error"))
