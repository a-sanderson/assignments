const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.vschool.io/pokemon")
xhr.send()
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        // JSON.parse() takes JSON data and converts it into Javascript Data
        const pokemonArr = JSON.parse(xhr.responseText)
        const pokemon = pokemonArr.objects[0].pokemon
        const myPokemon = pokemon.slice(10,17)
        pokeDisplay(myPokemon)
        console.log(myPokemon)
        
        
        
                                       
    } 
}
 


//  function apphendPokemon(arr){
//     arr.forEach(pokeApphend())

//  }
 
//  function pokeApphend(){
//      const div = document.createElement("div")
//      const p = document.createElement("p")
//     //  const p2 = document.createElement("p")
//      div.classList.add("pokeContainer")
//      p.textcontent = pokemonName
//      document.body.appendChild(div)
//      div.apphendChild(p)

//  }
function pokeDisplay(arr){
    arr.forEach((poke) => {
        const div = document.createElement("div")
        const p = document.createElement("p") 
        div.classList.add("pokeContainer")
        p.textContent = poke.name
        document.body.appendChild(div)
        div.appendChild(p)
    })
}