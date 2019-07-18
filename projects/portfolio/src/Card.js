import React from "react"

const Card = props => {
    return(
        <div className= "card">
            {props.icon}
            {props.description}
        </div>

    )
}
export default Card