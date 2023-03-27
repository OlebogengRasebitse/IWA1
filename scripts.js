const number = document.querySelector('[data-keys="number"]')
const subtract = document.querySelector('[data-keys="subtract"]')
const add = document.querySelector('[data-key="add"]')

const subtractHandler = () =>{
    console.log('subtract was clicked')
}


 const addHandler = () =>{
    console.log('add was clicked')
 }


subtract.addEventListener('click', subtractHandler)

add.addEventListener('click', addHandler)