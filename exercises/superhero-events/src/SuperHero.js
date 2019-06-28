import React from "react"

const SuperHero = props =>{
    return (
        <div className="heroContainer">
            <div className= "imageContainer">
                <img alt="heroes" className="image" src={props.heroImage}></img>
            </div>
            <div>
                <h1>{props.name}</h1>
                <h3>{props.show}</h3>
            </div>
            <div className="buttonContainer">
                <button onClick={() => props.heroMethod(props.catchphrase)}>click me</button>
            </div>
        </div>
    )
}
    
export default SuperHero
    