//getownpropertydescriptor(,)
//defineproperty(,,{ })


// const d=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(d);


// console.log(Math.PI);
// Math.PI=4;
// console.log(Math.PI);

const chai={
    name:"chai",
    price:250,
    isAvailable:true,
}
console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

//for-of loops in object
for(let [key,value] of Object.entries(chai)){
    if(typeof value != 'function'){
        console.log(`${key}:${value}`)
    }
}

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false,
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for(let [key,value] of Object.entries(chai)){
    if(typeof value != 'function'){
        console.log(`${key}:${value}`)
    }
}

chai.name="khyati"
console.log(chai.name)
