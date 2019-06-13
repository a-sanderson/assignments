document.getElementById("djSquare").addEventListener("mouseover", function(){
    var changeBlue = document.getElementById("djSquare")
    changeBlue.classList.add("blueSquare")
})
document.getElementById("djSquare").addEventListener("mousedown", function(){
    var changeRed = document.getElementById("djSquare")
    changeRed.classList.add("redSquare")
})
document.getElementById("djSquare").addEventListener("mouseup", function(){
    var changeYellow = document.getElementById("djSquare")
    changeYellow.classList.add("yellowSquare")
})
document.getElementById("djSquare").addEventListener("dblclick", function(){
    var changeGreen = document.getElementById("djSquare")
    changeGreen.classList.add("greenSquare")
})
document.getElementById("djSquare").addEventListener("mouseout", function(){
    var changeOrange = document.getElementById("djSquare")
    changeOrange.classList.add("orangeSquare")
})
 
window.addEventListener("keydown", function(){
    if(event.which === 66){
    var changeBlue = document.getElementById("djSquare")
    changeBlue.classList.add("blueSquare")
    }else if(event.which === 82){
        var changeRed = document.getElementById("djSquare")
    changeRed.classList.add("redSquare")
    }else if(event.which === 89){
        var changeYellow = document.getElementById("djSquare")
    changeYellow.classList.add("yellowSquare")
    }else if(this.event.which === 71){
        var changeGreen = document.getElementById("djSquare")
    changeGreen.classList.add("greenSquare")
    }else if(this.event.which === 79){
        var changeOrange = document.getElementById("djSquare")
    changeOrange.classList.add("orangeSquare")
    }

})
