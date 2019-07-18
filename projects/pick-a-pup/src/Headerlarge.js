import React from "react"
import {Link,} from "react-router-dom"

const Headerlarge = props => {

    return (
        <div className="headerContainer largeHeader">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/adopt">Adopt</Link>
            <Link to="/info">Breed Info</Link>
        </div>
    )
}

export default Headerlarge