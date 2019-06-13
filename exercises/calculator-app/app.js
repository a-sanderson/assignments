var answerP= document.getElementById("answerP")
var multiplyForm = document.multiplyForm
var subtractForm = document.subtractForm
var answerBox = document.getElementById("answerBox")
var addForm = document.addForm
addForm.addEventListener("submit",function(event){
    event.preventDefault()
    //var addAnswer = document.createElement("p")
    var x = parseInt(addForm.addInput.value)
    var y = parseInt(addForm.addInput2.value)
    answerP.textContent = (x + y)
    addForm.addInput.value = ""
    addForm.addInput2.value = ""
    //answerBox.appendChild(addAnswer)
    //addForm.value = ""
})
subtractForm.addEventListener("submit",function(event){
    event.preventDefault()
    //var subtractAnswer = document.createElement("p")
    var x = parseInt(subtractForm.subtractInput.value)
    var y = parseInt(subtractForm.subtractInput2.value)
    answerP.textContent = (x - y)
    subtractForm.subtractInput.value = ""
    subtractForm.subtractInput2.value = ""
    //answerBox.appendChild(subtractAnswer)
    //subtractForm.value = ""
})
multiplyForm.addEventListener("submit",function(event){
    event.preventDefault()
    //var multiplyAnswer = document.createElement("p")
    var x = parseInt(multiplyForm.multiplyInput.value)
    var y = parseInt(multiplyForm.multiplyInput2.value)
    //multiplyAnswer.textContent = (x * y)
    
    answerP.textContent= x*y
    //answerBox.appendChild(multiplyAnswer)
    //multiplyForm.value = number
    multiplyForm.multiplyInput.value = ""
    multiplyForm.multiplyInput2.value = ""
})