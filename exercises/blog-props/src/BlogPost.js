import React from "react"

const blogCard= (props) => {
    return (
        <div id="cardContainer" >
            <h1 className="postTitle">{props.title}</h1>
            <h2 className="postSub">{props.subtitle}</h2>
            <p style={{fontStyle: "italic"}}>
            Posted by {props.author} on {props.date}</p>
        </div>
    )
}

export default blogCard