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

//Random Color Function


//Window

let body = document.querySelector("body")
let navBar = document.querySelector(".main-navigation")

window.addEventListener('scroll', ()=> {
    console.log('scroll activated')
    body.style.background = "blue"
})

window.addEventListener('resize', ()=> {
    console.log('Ive been resized')
    navBar.style.background = "orange"
})

window.addEventListener('load', ()=> {
    alert("Welcome to My Page")
})

document.addEventListener('keydown', (event) => {
	if(event.key === 't') {
	alert('The date and time are ' + Date())
}
})

//Logo 

let logo = document.querySelector(".logo-heading")


logo.addEventListener('mouseover', ()=> {
    console.log('logo moused over');
    logo.style.color = "red" 
    TweenLite.to(logo, 1, {opacity:0.5, rotation:360});
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
    TweenLite.to(bus, 2, {width: "200px", height:"150px"});
})


//Body

let mapImage = document.querySelector(".img-content")
let paragraphs = document.querySelectorAll("p")
let text = document.querySelector(".text-content p")

text.addEventListener('click', ()=> {
    text.style.color = "orange"

})


for (i=0; i< paragraphs.length; i++) {
    paragraphs[i].addEventListener('copy', ()=> {
        alert("Dont Copy Us")
    })
}

mapImage.addEventListener('wheel', () => {
    console.log("Wheeeeeel")
    mapImage.style.transform = "scale(2.5)"
})

mapImage.addEventListener('drag', ()=> {
    console.log("This is a drag")
        alert("Stop Moving Me!")
})




const btn = document.querySelector('.btn')
const contentSection = document.querySelector('.content-pick')

function makeButtonRed(event) {
  event.currentTarget.style.backgroundColor = 'red'
    event.stopPropagation()
}

btn.addEventListener('click', makeButtonRed)
contentSection.addEventListener('click', makeButtonRed)

//Magic Bus

const content = document.querySelector(".content-section")
const magicBus = document.createElement("img")
magicBus.setAttribute('src', '/img/fun-bus-cropped.png')
content.appendChild(magicBus)


TweenLite.fromTo(magicBus, 1.5, {x: -1500, y: 0}, {x:1500, y:0});