






function displayData(arr){
    arr.forEach((obj) => {
      const div = document.createElement("div")
      div.classList.add("listDividers")
      const checkBox = document.createElement("input")
      checkBox.setAttribute("type", "checkbox")
      checkBox.setAttribute("class", "lineOut")
      const picContainer = document.createElement("div")
      picContainer.classList.add("picContainer")
      const h2 = document.createElement("h2")
      h2.textContent = obj.title
      h2.classList.add("toDoListTitle")
      document.getElementById("actualList").appendChild(div)
      div.appendChild(checkBox)
      div.appendChild(picContainer)
      div.appendChild(h2)
      

    })
}
// const checked = document.getElementsByClassName("lineOut")
// checked.addEventListener("click", function(){
//     document.getElementsByClassName("toDoListTitle").classList.add("lineThru")
//   }
// )
// function checkIt(){
//   if(document.getElementsByClassName("lineOut").checked == true){
//     document.getElementsByClassName("toDoListTitle").classList.add("lineThru")
//   }
// }

axios.get("https://api.vschool.io/Aaron/todo")
.then( (response) => {
    const todoArr = response.data
    
    displayData(todoArr)
 
    })
  .catch(function (error) {
    
    console.log(error);
  })
  