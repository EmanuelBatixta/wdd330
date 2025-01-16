const h1 = document.querySelector("#countdown")
const start = document.querySelector("#startButton")
const pause = document.querySelector("#pauseButton")
const restart = document.querySelector("#restartButton")

start.addEventListener("click",startCountDown)
pause.addEventListener("click",pauseCountDown)
restart.addEventListener("click",restartCountDown)

let initialTime = prompt("Time in seconds")
let time = initialTime
let intervalID
h1.textContent = time

function startCountDown(){
    if (!intervalID){
        intervalID = setInterval(()=>{
            if(time >= 0){
                h1.textContent = time
                time--
            } else {
                setTimeout(()=>{
                    h1.textContent = `Time's up!`
                },1000)
            }
        }, 1000)
    }
}

function pauseCountDown(){
    if(intervalID){
        clearInterval(intervalID)
        intervalID = null
        pause.textContent = "Resume"
    } else {
        startCountDown(); 
        pause.textContent = "Pause";
    }
}

function restartCountDown(){
    clearInterval(intervalID)
    intervalID = null
    time = prompt("Choose your time")
    h1.textContent = time
    startCountDown()
}