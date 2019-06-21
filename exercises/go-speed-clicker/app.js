localStorage.setItem("clickCount", "0");
const countDisplay = document.getElementById("countDisplay")
const myBtn = document.getElementById("myBtn")
h2 = document.getElementById("actualNumber")
myBtn.addEventListener("click", () => {
    localStorage.clickCount++
    h2.textContent = localStorage.clickCount
    if(!intervalId){
       intervalID = setInterval(countDown, 1000)
    }
}

let intervalID

const timeUp = document.getElementById("timeUp")
function countDown(){
    let counter = 30;
    counter--
    if (counter === 0) {
    timeUp.textContent = "TIME IS UP!!!!!!!!"
    clearInterval(clickCountDown)
    timeUp.textContent = counter;
  }
}

// document.addEventListener("load", countDown())