var travelForm = document.travelForm

travelForm.addEventListener("submit", function(){
    event.preventDefault()
    var checkedRestrictions = []
    var destination = document.travelForm.destination
    var destinationArr= []
    var firstName = document.travelForm.firstName.value
    var lastName = document.travelForm.lastName.value
    var gender = document.travelForm.gender.value
    console.log(diet)
    var age = document.travelForm.age.value
    var diet = document.travelForm.diet
    for(i = 0; i < diet.length; i++){
       if(diet[i].checked){
           checkedRestrictions.push(diet[i].value)
       }
    }
    for(j = 0; j<destination.length; j++ ){
         if(destination[j].checked){
             destinationArr.push(destination[j].value)
         }
     }
       alert(`
       "name: " ${firstName} ${lastName}
       "gender and age: "${gender} ${age}
       "traveling to: " ${destinationArr}
       "with diet restricions of:" ${checkedRestrictions}`

       )
    
})
