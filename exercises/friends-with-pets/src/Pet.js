import React from "react"

const Pet = props => {
    return (
        <div>
           <p>Pet Name:{props.petName}</p> 
           <p>Breed: {props.petBreed}</p> 
        </div>
    )
}
export default Pet