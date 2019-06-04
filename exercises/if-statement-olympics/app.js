var num = 3
if(5>3){
    console.log("is greater than");
}

var animal = "cat"
if(animal.length=3){
    console.log("is the length");
}

var animal2 = "dog"
if(animal===animal2){
    console.log("same animal")
}else{
    console.log("not the same")
}

var person = {
    name: "Bobby",
    age: 12
}
if(person.name.charAt(0)=="B"&&person.age>18){
    console.log(person.name + " is allowed to go to the movie")
}else{
    console.log("Not old enough Bobby!" + " Better luck next year")
}

var num2 = "1"
if(num2 === 1){
    console.log("strict")
}else if(num2 == 1){
    console.log("abstract")
}else{
        console.log("not equal at all")
}

if(typeof animal2 === "string"){
    console.log("thats a string")
}
if(typeof true === "boolean"){
    console.log("thats a boolean")
}
if(typeof animal5 === "undefined"){
    console.log("thats an undefined variable")
}
