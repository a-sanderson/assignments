import React from "react"

const Hit = props => {
    return (
        <div style={{backgroundImage: `url(${props.image})`}}  className="hit">
            <div  className= "nameContainer">
                    <p>{props.name}</p>
            </div>
               
        </div>
    )

}

export default Hit