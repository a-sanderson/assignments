import React from "react"

function Footer(){
    return(
        <footer id = "jcFooter">
            <div id = "contactBox">
                <p>Jonathan Harbison, Owner</p>
                <p>JC Tree and Landscape</p>
                <p>3333 north park way</p>
                <p>865.455.8009</p>
            </div>
            <div id = "socialMedia">
                <img class ="imageSize" src ={require("./roundFB.png")} />
                <img class ="imageSize" src ={require("./roundInsta.png")} />
                <img class ="imageSize" src ={require("./roundLinkedIn.jpg")} />

            </div>
        </footer>
    )
}
export default Footer