const readline = require("readline-sync")
// Greet the player
const name = readline.question("What is your name? ");
console.log("Thank you " + name + "!" )


// Set up Global Variables
let gameOver = false
let options = ["Put hand in hole", "Find the key", "Open the door"]
let options2 = ["Run into the woods", "hide", "open door into the next building"]
let options3 = ["grab the torch", "punch the wall", "remove the funny rock in the wall"]

// Game Loop
while(!gameOver){
    const userAnswer = readline.keyInSelect(options, "What would you like to do?: ")
    
    if(userAnswer === 0){ // They put their hand in the hole.
        console.log("you died, why did you put your hand in the hole.  Haven't you ever seen The Mummy")
        gameOver = true
    } else if(userAnswer === -1){ // They pressed "0" and tried to cancel
        console.log("Borimir says, 'One cannot cancel an escape room'")
        gameOver = true
    } else if(userAnswer === 2){
        console.log("you can not open a door without a key!")
        gameOver = true
    }else if (userAnswer === 1){
        console.log("of course you need a key to open the door! On to the next level if you dare")
    }
    const userAnswer2 = readline.keyInSelect(options2, "You unlocked the door and escaped the room. You are now in the woods and a creepy castle building with an unlocked door lies ahead. Choose next option or die!")
    if(userAnswer2 === 0){
        console.log("You cant run from this monster!")
        gameOver = true
    }else if(userAnswer2 === 1){
        console.log("You cant hide from this monster! You are eaten alive dumbass!")
        gameOver = true
    }else if(userAnswer2 === 2){
        console.log("Good job. You got past the level but you are stuck in a room again! Next Level")
    }
    const userAnswer3 = readline.keyInSelect(options3, "You are now in a creepy concrete room in the castle like building. You hear the monster causing mayhem outside. There is a torch in the current room you are stuck in and a funny looking stone in the wall that looks like it doesnt belong. What do you do? Pick next option.")
    if(userAnswer3 === 0){
        console.log("You did it! You escaped! Removing the torch unlocked the door, and the monster is scared of fire, you got away! Game over")
        gameOver = true
    }else if(userAnswer3 === 1){
        console.log("why the heck would punching the wall help escape a room? Idiot")
        gameOver = true
    }else if(userAnswer3 === 2){
        console.log("nice try. but that is just a funy looking rock. You are still stuck in the room")
        gameOver = true
    }
} 