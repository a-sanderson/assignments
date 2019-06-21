const readline = require("readline-sync");
// const {Enemy, generateEnemy1, boost, hyperBoost} = require("./myotherFunctions")

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
            } 
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

function battleLoop2(enemy){
    console.log("GUIDE: Let's See What You Got!")
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
                battleOver = true
                console.log("\n\nGUIDE: WE had to use a ship cannon! ")        
            }if(enemy.health < 40){
                user.ship.durability--
                console.log(`${enemy.name} attacked ${user.name}'s ship shield! Durability lost a point!`)
            }if(enemy.health< 40  && user.ship.durability === 0){
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
                gameOver2 = true
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


    function Enemy(name,health,attackPower,galaxyCrystal){
        this.name = name
        this.health = health
        this.galaxyCrystal = galaxyCrystal
        this.attackPower = attackPower
        this.attackBack = function(){
        return (Math.floor(Math.random() * 4) * Number(this.attackPower))
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
    function generateEnemy2(){
        const randomNum = Math.floor(Math.random() * 3)
        if(randomNum === 0){
            return new Enemy("Pavoneer Trooper", 45,10,"Pavonian rock")
        } else if(randomNum === 1){
            return new Enemy("Pavoneer Prince", 55,12, "Pavonian Energy Mineral")
        } else {
            return new Enemy("Pavoneer Pirate",65,15, "PavCore Crystal")
        }
    }
    
    function boost(){
        const randomNum = Math.floor(Math.random() * 3)
            if(randomNum === 0){
                // Enemy Appears
                const currentEnemy = generateEnemy1()
                console.log(`GUIDE: uh oh, I spy a  ${currentEnemy.name} exiting a wormhole to defend his planet!`)
                // Battle loop
                battleLoop(currentEnemy)
            }else{
                console.log("GUIDE: whew, that was close! I spotted a a Niberian in the distance. Getting closer.")
            }
    }
    function boost2(){
        const randomNum = Math.floor(Math.random() * 3)
            if(randomNum === 0){
                // Enemy Appears
                const currentEnemy = generateEnemy2()
                console.log(`GUIDE: uh oh, I spy a  ${currentEnemy.name} exiting a wormhole to defend his planet!`)
                // Battle loop
                battleLoop2(currentEnemy)
            }else{
                console.log("GUIDE: whew, that was close! I spotted a a Pavoneer in the distance. Getting closer.")
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
    function hyperBoost2(){
        const randomNum = Math.floor(Math.random() * 7)
            if(randomNum === 0 || randomNum === 1 || randomNum === 2 || randomNum ===  3 || randomNum === 4){
                const currentEnemy = generateEnemy2()
                console.log(`GUIDE: uh oh, I spy a  ${currentEnemy.name} exiting a wormhole to defend his planet!`)
                battleLoop2(currentEnemy)
            }else if (randomNum === 5){
                console.log("GUIDE: IM AGING BY THE SECOND! HaHaHaHa Pavonia is in our sights")
                gameOver=true
            }
            else{
                console.log("GUIDE: WHY!!!! You endangered my life! Atleast we are almost there")
            }
    }
    function level2bBattle(){
    battleOver = false
    while(!battleOver){
       const firstBoss = new Enemy("Pavvy the SkullCrusher", 80, 20, "compressed Star")
        console.log("\n GUIDE: ITs PAVVVVVVYYYYYYYY! You haven't heard of him? \n\n\n Pavvy THE SKULLCRUSHER? HE is known across galaxies, and he is coming for your head!")
        console.log("GUIDE: It takes 4 whole ship cannons to kill this guy!AND 2 SPEED POINTS TO GET AWAY!! ")
        console.log("\n\n GUIDE: One more thing! Your ship durability shield is down! I still believe in you!")
        const bossMove = readline.keyInSelect(["fight", "fly","use ship cannon"], "\nGUIDE: What is your first move??")
        if(bossMove === 0){
            const attackPower = user.attack()
            firstBoss.health -= attackPower
            user.weapon.rounds--
            console.log(user)
            console.log(`${user.name} attacked ${firstBoss.name} for ${attackPower}!!!`)
            if(user.weapon.rounds <= 0){
            const userChoice = readline.keyInSelect(["use one of your ship cannons", "use a ship speed point"], "\n\n GUIDE: You are out of Ammo! Use a cannon or speed point to fly away!")
                if(userChoice === 0){
                    user.ship.cannon--
                    user.ship.cannon--
                    console.log("\n\n GUIDE: Well, you used a 2 cannons, but we got past the enemy and we are on our way")
                    user.galaxyCrystals.push(firstBoss.galaxyCrystal)
                    battleOver = true
                    if(user.ship.cannon === 0){
                        console.log("\n GUIDE: Our last resort was to use 2 speed points")
                        user.ship.speed--
                        user.ship.speed--
                    }else if(user.ship.cannon === 0 && user.ship.speed <= 1){
                        battleOver = true
                    }
                }else if(userChoice === 1){
                    user.ship.speed--
                    user.ship.speed--
                    console.log("\n\n GUIDE: We used 2 speed points to fly away!")
                    battleOver =true
                }
            } else if(firstBoss.health< 55){
                const enemyAttack = firstBoss.attackBack()
                user.health -= enemyAttack
                console.log(`${firstBoss.name} attacked ${user.name} for ${enemyAttack}!`)
            }else if (firstBoss.health < 55 && user.health< 25){
                user.health -= (enemyAttack * .25)
                console.log(`${firstBoss.name} attacked ${user.name} for ${enemyAttack}!`)

            }else if(firstBoss.health <= 0){
                console.log("\n\nGUIDE: YOU BARELY MADE IT! But, a boss down is a boss down")
                battleOver = true
            }else if(user.health <=0){
                console.log("\n\nGUIDE: Its all good! Not eveyone can be a BOSS. Better Luck Next time kid.GAMEOVER")
                battleOver = true
            }
        } else if(bossMove === 1 && user.ship.speed >= 2){
            user.speed--
            user.speed--
            console.log("\n\nGUIDE: WE used 2 speed points to get past the Boss!")
            battleOver = true
        }else if (bossMove === 1 && user.ship.speed <= 1){
            console.log("GUIDE: NOT ENOUGH SPEED POINTS!!!! PICK A DIFFERENT OPTION AND MAKE IT QUICK!")
        }if(bossMove === 2 && user.ship.cannon >= 3){
            user.ship.cannon--
            user.ship.cannon--
            user.ship.cannon--
            console.log("\n GUIDE: We used 3 ship cannons to get past the boss. You desperate or stupid?")
            battleOver = true
        }else if(bossMove === 2 && user.ship.cannon <=2){
            console.log("GUIDE: Not Enough Ship Cannons Left. Try a different Option")
        }
    }
}
    






///////
//GLOBAL VARIABLES BELOW////
// 
// 





let battleOver = false
let gameOver1 = false
let gameOver2 = false

const destroyerShip = {
    name: "DESTROYER SHIP",
    durability: 10,
    speed: 2,
    cannon: 3
}
const timeWarper = {
    name: "TIME WARPER",
    durability: 2,
    speed: 10,
    cannon: 1
}
const plasmoBlaster = {
    name: "PLASMO BLASTER",
    durability: 5,
    speed: 5,
    cannon: 5,
}
const shipOptions = ["name: 'DESTROYER SHIP' durability: 10, speed: 2, cannon: 3","name: 'TIME WARPER', durability: 2, speed: 10, cannon: 1","name: 'PLASMO BLASTER', durability: 5, speed: 5, cannon: 5"]
const shipOptionsExport = [destroyerShip,timeWarper,plasmoBlaster]
const hyperLaser = {
    name: "HYPER LASER",
    hp: 5,
    rounds: 50
}
const plasmicNeedler = {
    name: "PLASMIC NEEDLER",
    hp: 25,
    rounds: 25
}
const rocketLauncher = {
    name: "STANDARD ROCKET LAUNCHER",
    hp: 2,
    rounds: 3
}
const weaponChoicesExport = [hyperLaser, plasmicNeedler, rocketLauncher]
const weaponChoices = ["name: HYPER LASER, hp: 5, rounds: 100","name:PLASMIC NEEDLER hp:25, rounds: 25","name: STANDARD ROCKET LAUNCHER, hp: 100, rounds: 3"]

let user = {
    name: "",
    health: 100,
    weapon: "",
    ship: "",
    galaxyCrystals:[],
    attack: function(){
        return Math.floor(Math.random() * user.weapon.hp)
    }
 }
 







console.log("Welcome to Galaxy Voyage. Are you sure you are ready for this journey?")
user.name = readline.question("\nI will be your guide along the way.What is your name brave star traveller? \n Please type user name and press enter")
console.log("\n\n a fellow earthling named Harold will greet you as it is time for departure into the sky. You will get to choose one of three weapons, and one of three ships.")
console.log("\n\n\n\n Hi I am Harold. I dont think you are ready for the trials and tribulations of a space voyage of this capacity, but if you have the loot, I have the ships and weapons. \n\n First, pick one ship.")
let userShip = readline.keyInSelect(shipOptions, "\n Ok, if you are sure you are prepared, which ship will you be carrying you on this voyage? \n Please enter number 1-3")
if (userShip === 0){
    user.ship = destroyerShip
} else if (userShip === 1){
    user.ship = timeWarper
} else if (userShip === 2){
    user.ship = plasmoBlaster
}

console.log("\n\n HAROLD: Ok great, now that you have a way to travel to your inherent death in the cosmos, lets get you a weapon to defend yourself so you can attemp to prove me wrong.")
let userWeapon = readline.keyInSelect(weaponChoices, "\n GUIDE: Hurry and choose we are scheduled to depart soon!!! \n\n Please enter number 1-3" )
if(userWeapon === 0){
    user.weapon = hyperLaser
}else if(userWeapon === 1){
    user.weapon = plasmicNeedler
}else if (userWeapon === 2){
    user.weapon = rocketLauncher
}

console.log(`

                                                       
.*                                            
#&#%#%%##%##%%######%%%&&%#/,.  .             
%%%&###%%%&##########################%%,         
/&%%&(          .%&%%###**(########################%#######&*     
&#%##%#&###((&%#*#%&&###%(%&###################################%   
%%%###%%%%%%(&&%#&&&&###%%%%#%&&&&&&&&&&&&&&&&&&&&&&&&%%%###&&%,   
,%&&&&&*      .,*#&&&###%/*%#####################&%&&##&&&%&&&,    
.&&&&&&&&&&&&&&&&&&&&&&&&&&&&&#*,,*(##%&&&%(      
(&&&%%#&#%%%%%##&&&&&&&%%#/*,,,,,,*%&&&&#        
  #%*#*##%%##(/***,,,,,,,(*,,**/###           
               %&&&&//%#&&&&#**//&(/          
                 .*%&,  (&&#(**//(&%          
                    %%  %(((%,**//(%%         
                    ..  %&&&##**///%((        
                        &%%(##***//(&(.       
                      (%&(((&#**/(&&(&        
                      &&&#%&%&%&##&,          
                     *#&&&%%#%%.              
                      ,&#&(.                  
                                              
                                       


`)

console.log("\n\n HAROLD: Terrible Choice, but to each is own. Good luck tough guy!")
console.log("\n\n\n")
console.log(user)
console.log("\n\n")
console.log("GUIDE: Ok, now that you have selected your ship and weapon, we are about to begin our voyage.First, a little instruction.\n Above is your current user profile. You will be prompted a few times throughout the game to check your current stats.\n You will be given options, and you may encounter enemies. You may have noticed your ship has cannons. Each cannon is a one time use that destroys the current enemy you are battling completely. Use your cannons sparingly, as enemies are harder as the game goes on.\n Press any key to continue! ")

console.log(`


                                                           
                                            ,@@@@@@@@                                              
                                          @@##(     #@@.                                           
                      */                 .@#########/ #@@.                                         
                  *@@%###@@@@             @%#############@@                                        
                @@##,      (##@@@         @&###############@@                                      
               @@#################@@@     @@%###############%@%                                    
              @@#####################%@@( @@%%#%%%%%%%%%%%%###@@                                   
               @&#####%@@@@@@@###########@@@@@@@@@@@@@@@@@@@@@@@@@@&,                              
                @@%#@@,,###/,,,@@@%&@@@@%/////////*@@&&&%.      *%&&&&&@@@@&                       
                 @@@,(#####%%%&@@@////.    ///////@@&&&&&&&&&&&%.        /&&&@@@%                  
                  @(%%##%%%@@@///,   */////////// @&&&&&&&&&&&&&&&&&&&(       #&&@@@               
                   @%%%%@@@///  ////////////////.@@&&&&&&&&&&&&&&&&&&&&&&&&&&#    &&@@@            
                   .@%@@(//.//////////////////// @@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  %&@@          
                    #@(///////////////// @@@@@ / @&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%  &&@@        
                   @@##########////////////////* @&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&@@       
                  (@@@&&@@@@@@@###/////**@@@@ // @@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&@@      
                  @#////////,  #@@##//////////// &@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&@      
                  @#//////////// (@&##//* %@@( /  @@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&@      
                  @@#////////////* #@@###//////// *@&&&.&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&@      
                   @##(/////////////  @@@%#########%@&&&#   *%&&&&&&&&&&&&%%#//%&&&&&&@@&%&@*      
                 @@@####%@@@@@@@&/////*   @@@@@&%%%%@@@&&&&%.      /&&&&&&&&&&@@@@@(////(#@#       
              @@&##          (####%@@@%////.           @@@&&&&&&&&&&&&&@@@@@%  ,//////##@@         
           *@@## ###############,  (###%@@#////////////   .@@@@@@@@@*     /////////(##@@           
          @@###############################@@//////////////.      ,/////////////###&@@             
        /@###################################@@///////////////////////////######@@@                
        @&%####################################@@#(///////////((###########@@@@                    
        @@%%%#########################%%%%%%%%%%@@#################&@@@@@(                         
         @@%%%%%%#####%%%%%%%%%%%%%%%%%%%%&@@@@@@@@@@@@@@@@@@@&(                                   
           @@&%%%%%%%%%%%%%%%%%&@@@@@@@@&%%%%%%%&@@@.                                              
              @@@@@@@@@@@@&/    @@@%%%%%%%%&@@@#                                                   
                                   /@@@@@@/                                                        
                                                                 






`)
while(!gameOver1){
    const userStart = readline.keyInSelect(["Lets do it!", "No, Im a pansy"], "GUIDE: Ok Are you ready ???")
    if(userStart === 0){
    console.log(`GUIDE: Welcome to level one ${user.name}. For this first mission we will enter space and attempt to reach planet Nibiru. You may encounter enemies and will be faced with options.`)
    }
    const userAnswer = readline.keyInSelect(["boost","Hyperboost"])
        if (userAnswer === 0){
        boost()
        }else if(userAnswer === 1){
        hyperBoost() 
        }              
    console.log("\n\n GUIDE: Alright we are cruising along. What would you like to do now?")
    const answer2 = readline.keyInSelect(["boost", "Hyperboost"])  
        if(answer2 === 0){
            boost()
        }else if (userAnswer === 1){
            hyperBoost()
        }
    console.log("\n \n GUIDE: that was a rough first leg of the Mission, but we made it. Welcome to Nibiru! Be ready for tougher enemies next level.") 
    gameOver1 = true   
}
while(!gameOver2){
    console.log(`\n\n GUIDE: Ok , you proved yourself ${user.name}. You are moving on to the next level.\n\n A couple of things to note from here on out.\\n The enemies will be much harder now. Your ship durability will now come into play and act as a shield. Once your durability is gone you will recieve a message. \n There will also be a enemy boss at the end of the level, so be prepared for that! `)
    const level2Start = readline.keyInSelect(["boost", "Hyperboost"], "GUIDE: You know the drill. We didnt come out here to float in space. Pick one.")
        if(level2Start === 0){
            boost2()
        }else if (level2Start === 1){
            hyperBoost2()
        }
    console.log("\n\n GUIDE: Ok We are really doing this, Gaurdians of the Galaxy style, que the good music!") 
    const displayUser = readline1.keyIn('\n\nGUIDE: you should check your stats! Press 1 to do so! ',
  {limit: '$<1>'});
        if(displayUser === 1){
            console.log(user)
        }
    const level2Round2 = readline.keyInSelect(["boost", "hyperBoost"], "GUIDE: That inevitable time again. You know the drill. WE gotta get there somehow.")
        if(level2Round2 === 0){
            boost2()
        }else if (level2Round2 === 1){
            hyperBoost2()
        }
    console.log("\n\n GUIDE: WOOOOOWWWWWWW You are still alive. One final push. You sure you dont want to give up?\n\n We can die here in space ! IM down")
    userBossAnswer = readline.keyInSelect(["bring it on!"], "Whats it gonna be?") 
        if(userBossAnswer === 0){
            console.log(`
            
            
            
 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄               ▄  ▄               ▄  ▄         ▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄    ▄  ▄         ▄  ▄            ▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
 ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌             ▐░▌▐░▌             ▐░▌▐░▌       ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░▌  ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌ ▐░▌           ▐░▌  ▐░▌           ▐░▌ ▐░▌       ▐░▌      ▀▀▀▀█░█▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌ ▐░▌ ▐░▌       ▐░▌▐░▌          ▐░▌          ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌
 ▐░▌       ▐░▌▐░▌       ▐░▌  ▐░▌         ▐░▌    ▐░▌         ▐░▌  ▐░▌       ▐░▌          ▐░▌     ▐░▌       ▐░▌▐░▌               ▐░▌          ▐░▌▐░▌  ▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌
 ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌   ▐░▌       ▐░▌      ▐░▌       ▐░▌   ▐░█▄▄▄▄▄▄▄█░▌          ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌░▌   ▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌
 ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌    ▐░▌     ▐░▌        ▐░▌     ▐░▌    ▐░░░░░░░░░░░▌          ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░░▌    ▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌          ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌     ▐░▌   ▐░▌          ▐░▌   ▐░▌      ▀▀▀▀█░█▀▀▀▀           ▐░▌     ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀       ▀▀▀▀▀▀▀▀▀█░▌▐░▌░▌   ▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌          ▐░█▀▀▀▀█░█▀▀ ▐░▌       ▐░▌ ▀▀▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀█░█▀▀ 
 ▐░▌          ▐░▌       ▐░▌      ▐░▌ ▐░▌            ▐░▌ ▐░▌           ▐░▌               ▐░▌     ▐░▌       ▐░▌▐░▌                         ▐░▌▐░▌▐░▌  ▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌          ▐░▌     ▐░▌  ▐░▌       ▐░▌          ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌     ▐░▌  
 ▐░▌          ▐░▌       ▐░▌       ▐░▐░▌              ▐░▐░▌            ▐░▌               ▐░▌     ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄       ▄▄▄▄▄▄▄▄▄█░▌▐░▌ ▐░▌ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄█░▌ ▄▄▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌ 
 ▐░▌          ▐░▌       ▐░▌        ▐░▌                ▐░▌             ▐░▌               ▐░▌     ▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌
  ▀            ▀         ▀          ▀                  ▀               ▀                 ▀       ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀    ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀ 
                                                                                                                                                                                                                                                                                      
 
            
            
     
            `)
    
            level2bBattle()
        }
    console.log("\n\n GUIDE: You really beat the boss! The one and only SKULLCRUSHER! You should check your stats.\n\n I cant wait to tell ole Harold about this one! ")
    gameOver2 = true    
}


// module.exports = {
//     user: user,
//     weaponChoicesExport:weaponChoicesExport,
//     shipOptionsExport:shipOptionsExport,
    
// }