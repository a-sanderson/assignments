import React from "react"
import Pet from "./Pet.js"
const Friend = props => {
    const mappedPets = props.pets.map((pet,i) =><Pet 
                                    key={i + pet}   
                                    petName={pet.name} 
                                    petBreed={pet.breed}/>)
console.log(props)
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <h3>{props.name}'s pets:</h3>
            {mappedPets}
        </div>
    )
}
export default Friend