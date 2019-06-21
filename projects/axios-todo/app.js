getData();
const actualList = document.getElementById("actualList")
const addTodoForm = document.addItems
addTodoForm.addEventListener("submit",(event)=>{
  event.preventDefault()
  const newTitle = addTodoForm.title.value
  const newDescription = addTodoForm.description.value
  const newPrice = addTodoForm.price.value
  const newImage = addTodoForm.imgUrl.value

  const newTodo = {
    title: newTitle,
    description: newDescription,
    price: newPrice,
    imgUrl: newImage

  
}

  axios.post("https://api.vschool.io/Aaron/todo", newTodo)
    .then(response => {
      console.log(response)
      getData()
    })
    .catch(error => console.log(error))
    addTodoForm.reset()
})






function displayData(arr){
  actualList.innerHTML= ""; 
  arr.forEach((obj) => {
      const div = document.createElement("div")
      const picContainer = document.createElement("div")
      const div2 = document.createElement("div")
      const checkBox = document.createElement("input")
      const h2 = document.createElement("h2")
      const div3 = document.createElement("div")
      const checkBox2 = document.createElement("input")
      const div4 = document.createElement("div")
      const p = document.createElement("p")
      const p2 = document.createElement("p")
      const img = document.createElement("img")
      const deleteBtn = document.createElement("button")
      const editBtn = document.createElement("button")
      // edit new elements
      div.classList.add("listDividers")
      picContainer.classList.add("picContainer")
      p.textContent = "Mark as Complete"
      p2.textContent = "Mark as Incomplete "
      h2.textContent = obj.title
      h2.classList.add("toDoListTitle")
      img.setAttribute("src", obj.imgUrl)
      editBtn.textContent= "Edit this Listing"
      //edit event to pull up edit form //
      editBtn.addEventListener("click",(event)=> {
        checkBox.classList.toggle("onEdit")
        checkBox2.classList.toggle("onEdit")
        h2.classList.toggle("onEdit")
        p.classList.toggle("onEdit")
        p2.classList.toggle("onEdit")
        img.classList.toggle("onEdit")
        deleteBtn.classList.toggle("onEdit")
        //creating elements
        const newForm = document.createElement("form")
        const titleInput = document.createElement("input")
        const descriptionInput=document.createElement("input")
        const priceInput = document.createElement("input")
        const imgInput = document.createElement("input")
        const putBtn = document.createElement("button")
        //edited elements
        
        
        
        putBtn.classList.add("putButton")
        titleInput.value = obj.title
        descriptionInput.value = obj.description
        priceInput.value = obj.price
        imgInput.value = obj.imgUrl
        putBtn.textContent="Submit Edits"
        // append elements
        div.appendChild(newForm)
        newForm.appendChild(titleInput)
        newForm.appendChild(descriptionInput)
        newForm.appendChild(priceInput)
        newForm.appendChild(imgInput)   
        newForm.appendChild(putBtn)
        newForm.addEventListener("submit", event => {
          event.preventDefault()
          const updatedTitle = titleInput.value
          const updatedDescrip = descriptionInput.value
          const updatedPrice = priceInput.value
          const updatedImg = imgInput.value
          console.log("success")
          axios.put("https://api.vschool.io/Aaron/todo/" + obj._id,{
            title: updatedTitle,
            description: updatedDescrip,
            price: updatedPrice,
            imgUrl: updatedImg,
          })
              .then(response => {
              console.log(response)
              getData()
            })
              .catch(error => console.log(error))
        })
      
      })
      deleteBtn.textContent="Delete From List"
      deleteBtn.addEventListener("click",(event)=> {
        console.log("success")
        axios.delete("https://api.vschool.io/Aaron/todo/" + obj._id)
            .then(response => {
            console.log(response)
            getData()
          })
            .catch(error => console.log(error))
      })
      checkBox.setAttribute("type", "checkbox")
      checkBox.addEventListener("click", function(){
          h2.classList.add("lineThru")
          axios.put("https://api.vschool.io/Aaron/todo/" + obj._id, {
              completed: true,
                })
          .then(response => {
              console.log(response);
          })
          .catch(error => {
              console.log(err);
          });
      })
      checkBox2.setAttribute("type", "checkbox")
      //appended elements
      actualList.appendChild(div)
      div.appendChild(h2)
      div.appendChild(picContainer)
      picContainer.appendChild(img)
      div.appendChild(div2)
      div2.appendChild(p)
      div2.appendChild(checkBox)
      div.appendChild(div3)
      div3.appendChild(p2)
      div3.appendChild(checkBox2)
      div.appendChild(div4)
      div4.appendChild(deleteBtn)
      div4.appendChild(editBtn)
      
    })
}
// const checked = document.getElementsByClassName("lineOut")
// checked.addEventListener("click", function(){
//     document.getElementsByClassName("toDoListTitle").classList.add("lineThru")
//   }
// )
 
function getData(){
axios.get("https://api.vschool.io/Aaron/todo")
    .then( (response) => {
    const todoArr = response.data
    console.log("test")
    displayData(todoArr)
 })
  .catch(function (error) {
    console.log(error);
  })
} 