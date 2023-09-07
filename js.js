// document.querySelectorAll en la class keys
const body = document.querySelector("body")
const HTKeys = document.querySelectorAll(".key")

// a cada boton asignarle una variable
let keyDO = HTKeys[0], 
    keyRE = HTKeys[1], 
    keyMI = HTKeys[2], 
    keyFA = HTKeys[3], 
    keySOL = HTKeys[4],
    keyLA = HTKeys[5], 
    keySI = HTKeys[6];

let songDO = "assets/do.wav",
    songRE = "assets/re.wav",
    songMI = "assets/mi.wav",
    songFA = "assets/fa.wav",
    songSOL = "assets/sol.wav",
    songLA = "assets/la.wav",
    songSI = "assets/la.wav";

// a cada variableKey(#) aisgnarle un keydown que reproduzca una cancion. y classList.toggle("clicked") con timeout

function playMusic(song) {
    new Audio(song).play()
}

function toggleClass(key) {
    key.classList.toggle("clicked")
    setTimeout(() =>{
        key.classList.toggle("clicked")
    },200)
}

body.addEventListener("keydown", (event)=>{
    switch (event.key) {
        case "a":
            playMusic(songDO)
            toggleClass(keyDO)
            break;
        case "s":
            playMusic(songRE)
            toggleClass(keyRE)
            break;
        case "d":
            playMusic(songMI)
            toggleClass(keyMI)
            break;
        case "f":
            playMusic(songFA)
            toggleClass(keyFA)
            break;
        case "g":
            playMusic(songSOL)
            toggleClass(keySOL)
            break;
        case "h":
            playMusic(songLA)
            toggleClass(keyLA)
            break;
        case "j":
            playMusic(songSI)
            toggleClass(keySI)
            break;
    }
})