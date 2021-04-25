
const countoutput = document.querySelector(".count")

const start = document.querySelector(".start")
const pause = document.querySelector(".pause")
const reset = document.querySelector(".reset")
const nap = document.querySelector(".nap")
const naps = document.querySelector(".naps")

let count = 0 
let interval 
let paused = false

const counter = () =>{
    ++count
    countoutput.innerHTML = count
}

start.addEventListener('click', () =>{
    interval = setInterval(counter, 200)
    let disClear = document.querySelector(".start")
    disClear.classList.add("add_dis")
})

pause.addEventListener('click', () => {
    if(!paused){
        clearInterval(interval)
        paused = true
        pause.innerHTML = "resume"
    }else{
        interval = setInterval(counter, 200)
        pause.innerHTML = "pause"
        paused = false
    }
    
})
reset.addEventListener('click', () =>{
    countoutput.innerHTML = 0
    pause.innerHTML = "Pause"
    clearInterval(interval)
    count = 0 
    let disadd = document.querySelector(".start")
        disadd.classList.remove("add_dis")
})
nap.addEventListener('click', () =>{
    naps.innerHTML += `<li>Nap: ${count}</li>`
})