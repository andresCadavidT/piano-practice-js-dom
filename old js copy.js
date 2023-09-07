let body = document.querySelector("#body")
let key1 = document.querySelector("#key1")
let key2 = document.querySelector("#key2")
let key3 = document.querySelector("#key3")
let key4 = document.querySelector("#key4")
let key5 = document.querySelector("#key5")
let key6 = document.querySelector("#key6")
let key7 = document.querySelector("#key7")
let key8 = document.querySelector("#key8")
let key9 = document.querySelector("#key9")

function toggleClassClicked(key) {
    key.classList.toggle("clicked")
    setTimeout(function(){
        toggleClassClicked2(key)
    },100)
}

function toggleClassClicked2(key) {
    key.classList.toggle("clicked")
}

function playMusic(song){
    new Audio(song).play()
}

body.addEventListener("keydown", function(event) {
    if (event.key === "a") {
        toggleClassClicked(key1)
        playMusic("assets/do.mp3")
    } else if (event.key === "s") {
        toggleClassClicked(key2)
        playMusic("assets/re.mp3")
    } else if (event.key === "d") {
        toggleClassClicked(key3)
        playMusic("assets/mi.mp3")
    } else if (event.key === "f") {
        toggleClassClicked(key4)
        playMusic("assets/fa.mp3")
    } else if (event.key === "g") {
        toggleClassClicked(key5)
        playMusic("assets/sol.mp3")
    } else if (event.key === "h") {
        toggleClassClicked(key6)
        playMusic("assets/la.mp3")
    } else if (event.key === "j") {
        toggleClassClicked(key7)
        playMusic("assets/si.mp3")
    } 
})


