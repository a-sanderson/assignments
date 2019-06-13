var addForm = document.addForm
var answerBox = document.getElementById("answerBox")
addForm.addEventListener("submit", function(event){
    event.preventDefault()
    const baddieTotal = document.createElement("h4")
    baddieTotal.textContent = Number(addForm.bobomb.value)*7 + Number(addForm.cheepCheep.value)*11 + Number(addForm.goomba.value)*5 + " coins"
    answerBox.appendChild(baddieTotal)
    addForm.bobomb.value = ''
    addForm.cheepCheep.value = ''
    addForm.goomba.value = ''
    
})

