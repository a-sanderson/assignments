import React from "react"


function Body(){
    return(
        <main id= "main">
            <div id = "picContainer">
                <div id = "imageHolder">
                    <img id = "climbingGuy" alt = "climber" src="https://i.pinimg.com/originals/48/a3/4a/48a34a9d5c5ab6c65af8a8f2b43ad6e0.gif" />
                </div>
                <div id = "textReview">
                    <p className = "pStyle">Here at JC's Tree Service we truly care about our customers. We make sure that all precautions are taken to protect our workers and the safety of the customer! We are fast and efficient at what we do, and tree removal is our specialty. Having a problem with a tree causing too much shade over your garden? Give us a call.</p> 
                    <img src={require("./jcTreePic.jpg")} />
                </div>
                
            </div>
        
        </main>
    )
}
export default Body