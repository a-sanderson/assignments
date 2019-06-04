/*var computerCounter = 0

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
for(i=0; i<officeItems.length; i++){
  if (officeItems[i]==="computer"){
    computerCounter++
  }
}
console.log(computerCounter)*/
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
var gen 
for(i=0; i<peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
  if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
    gen = "he's"
  }else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
    gen = "she's"
  }

}

for(i=0; i<peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is " + "old enough to see Mad Max")
    }else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age <18){
      console.log("sorry, " + peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + gen +  " not old enough to see Mad Max!")
    }
} 