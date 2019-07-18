import React from "react"
import don2 from "./don2.jpg"
const Header = () => {
    return(
        <div className="header"> 
            <div className="donContainer">
                <img alt="don" src={don2} ></img>
                <h2>Don Corleone's Hit List</h2>
            </div>
        </div>
    )
}
export default Header