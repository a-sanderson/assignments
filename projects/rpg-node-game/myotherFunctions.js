
const readline = require("readline-sync")
const {user,shipOptionsExport, weaponChoicesExport, } = require("./app.js")

let battleOver = false


function Enemy(name,health,attackPower,galaxyCrystal){
    this.name = name
    this.health = health
    this.galaxyCrystal = galaxyCrystal
    this.attackPower = attackPower
    this.attackBack = function(){
        return Math.floor(Math.random() * Number(this.enemy.attackPower))
    }
}

function generateEnemy1(){
    const randomNum = Math.floor(Math.random() * 3)
    if(randomNum === 0){
        return new Enemy("Nibirian Foot Soldier", 25,5,"galactic microbe")
    } else if(randomNum === 1){
        return new Enemy("Energy Alien", 30,8, "Moon Pebble")
    } else {
        return new Enemy("Nibirian Commander", 40,15, "Nibirian Solar Orb")
    }
}
function boost(){
    const randomNum = Math.floor(Math.random() * 3)
        if(randomNum === 0){
            console.log(user)
            // Enemy Appears
            const currentEnemy = generateEnemy1()
            console.log(`GUIDE: uh oh, I spy a  ${currentEnemy.name} exiting a wormhole to defend his planet!`)
            // Battle loop
            battleLoop(currentEnemy)
        }else{
            console.log(user)
            console.log("GUIDE: whew, that was close! I spotted a a Niberian in the distance. Getting closer.")
        }
}
function hyperBoost(){
    const randomNum = Math.floor(Math.random() * 7)
        if(randomNum === 0 || randomNum === 1 || randomNum === 2 || randomNum ===  3){
            const currentEnemy = generateEnemy1()
            console.log(`GUIDE: uh oh, I spy a  ${currentEnemy.name} exiting a wormhole to defend his planet!`)
            battleLoop(currentEnemy)
        }else if (randomNum === 4){
        console.log("GUIDE: Wow you are crazier than the stories I heard on Earth! We are really close now!")
        }
        else if (randomNum === 5){
            console.log("GUIDE: We made it ! You sure are wild boosting through enemy territory, but you have made it to Nibiru and passed level 1")
            gameOver=true
        }
        else{
            console.log("GUIDE: WHY!!!! You endangered my life! Atleast we are almost there")
        }
}


function battleLoop(enemy){
    console.log("GUIDE: Here we go! Hope you are a good shot!")
    battleOver = false
    while(!battleOver){
        const userChoice = readline.keyInSelect(["fight", "fly","use ship cannon"], "What would you like to do?: ")
        if(userChoice === 0){
            const attackPower = user.attack()
            enemy.health -= attackPower
            user.weapon.rounds--
            console.log(user)
            console.log(`${user.name} attacked ${enemy.name} for ${attackPower}!!!`)
            if(user.weapon.rounds <= 0){
                const userChoice2 = readline.keyInSelect(["use one of your ship cannons", "use a ship speed point"], "\n\n GUIDE: You are out of Ammo! Use a cannon or speed point to fly away!")
                if(userChoice2 === 0){
                    user.ship.cannon--
                    console.log("\n\n GUIDE: Well, you used a cannon, but we got past the enemy and we are on our way")
                    user.galaxyCrystals.push(enemy.galaxyCrystal)
                    battleOver = true
                }else if(userChoice2 === 1){
                    user.ship.speed--
                    console.log("\n\n GUIDE: We used a speed point to fly away!")
                    battleOver =true
                }
            }if(user.weapon.rounds === 0 && user.ship.cannon === 0){
                user.ship.speed--
                console.log("\n\nGUIDE: you are out of rounds and ship cannons! We had to fly away! Speed minus one")
                battleOver = true
            }if(user.weapon.rounds === 0 && user.ship.speed === 0){
                user.ship.cannon--
                user.galaxyCrystals.push(enemy.galaxyCrystal)
                console.log("\n\nGUIDE: WE had to use a ship cannon! ")        
            }if(enemy.health < 20 && enemy.health > 10){
                const enemyAttack = enemy.attackBack()
                user.health -= enemyAttack
                console.log(`${enemy.name} attacked ${user.name} for ${enemyAttack}`)
            }if(user.health <= 20){
                console.log("\nGUIDE: Warning! Your health is at 20 or below!")
            }if(enemy.health <=10){
                console.log(`\nGUIDE: You are close! What a fight ! You will gain a GALAXY STONE from ${enemy.name}\n check your user purse to view the stone` )
                    
            }if(user.health <= 0){
                console.log("\nGUIDE: The enemy was too much for you! Better Luck Next time!")
                battleOver = true
                gameOver1 = true
            }if(enemy.health <= 0){
                console.log("\nGUIDE: TOOK HIM DOWN WHEWWWWWWW! FREAKING EXHILIRATING!!!!!!!!!!!! Good shooting. You sure you havn't been on a mission before?`")    
                battleOver = true
        }else if(userChoice === 1){
                user.ship.speed--
                console.log("\nGUIDE: You got past the enemy, but it will cost you a ship speed point")
                enemy.health = 0
                battleOver = true
                
        }else if(userChoice === 2){
                console.log("\nGUIDE: you used one of your ship cannons to defeat the enemy")
                user.ship.cannon--
                user.galaxyCrystals.push(enemy.galaxyCrystal)
                battleOver = true
                console.log(user)
                
            }
        } 
    }
}


    // berfore next batle set battle loop boolean back to false
module.exports = {
    battleLoop : battleLoop,
    Enemy : Enemy,
    generateEnemy1: generateEnemy1,
    boost: boost,
    hyperBoost: hyperBoost



}

