// Your code goes here
// * [X] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [X] `dblclick`


//Body

let body = document.querySelector("body")

body.addEventListener('scroll', ()=> {
    console.log('scroll activated')
})

//Logo 

let logo = document.querySelector(".logo-heading")


logo.addEventListener('mouseover', ()=> {
    console.log('logo moused over');
    logo.style.color = "red" 
})

//Nav Bar

let navLink = document.querySelectorAll(".nav-link")

for (i =0; i<navLink.length; i++) {
    navLink[i].addEventListener('click', (event) => {
        event.preventDefault()
        console.log('prevented default')
    })
}


//Header Bus Picture
let bus = document.querySelector(".intro img")

bus.addEventListener('dblclick', () => {
    console.log('bus was double clicked')
    bus.style.border = "10px red solid"
})


// let welcome = document.querySelector(".intro h2")

// welcome.addEventListener('select', () => {
//     console.log('text selected')
//     welcome.style.color = "red"
// })