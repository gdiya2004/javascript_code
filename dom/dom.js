// DOM --> document object model
// console.log(window.document)
// console.log(document)
// console.dir(document)
// document.getElementById()
// document.getElementById().id
// document.getElementById().className
// document.getElementById().getAttribute('id')
// document.getElementById().setAttribute('class','test')//always overwrite
// const title=document.getElementById('title')
// title.style.backgroundColor='yellow'
// title.style.padding="15px"
// title.style.borderRadius="15px"
// title.textContent//appears everything even if it is hidden
// title.innerHTML//inner html ke tag ko bhi print krta hai.
// title.innerText//only visible content is there

//selects one element either by .class, #id, attributes:css
// document.querySelector('h1')
// document.querySelector('#title')//id
// document.querySelector('.heading')//class
// document.querySelector('input[type="password"]')
// document.querySelector('p:first-child')

//querySelectorAll: selects all
//nodelist not exactly same as array
//forEach works on nodelist
// const Templist=document.querySelectorAll('li')//returns nodelist
// Templist[0].style.color="";

//return HTML Collection
// //forEach doesnot works on it so we need to convert it into array
// const TempClass=document.getElementsByClassName('heading')
// const converted=Array.from(TempClass)