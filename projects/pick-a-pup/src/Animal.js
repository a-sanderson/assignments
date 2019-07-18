import React from "react"

const Animal = props => {
 console.log(props)
    return(
        <div className="animalContainer">
            <h1>{props.location.state.name}</h1>
            <p>species: {props.location.state.species}</p>
            <p>age: {props.location.state.age}</p>
            <p>gender: {props.location.state.gender}</p>
            <p>size: {props.location.state.size}</p>
            <div className="cardImageContainer"><img className="imageFit" alt="dog" src={props.location.state.photos[0].large}></img></div>
            <p>{props.location.state.description}</p>
        </div>
    )
}

export default Animal