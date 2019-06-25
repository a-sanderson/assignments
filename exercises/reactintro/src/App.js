import React from "react"
import Navbar from "./Navbar.js"
import Body from "./main.js"
import Footer from "./footer.js"

function App(){
    return(
        <div>
        <Navbar/>
        <div className = "centerItems">
        <h1 className = "homeTitle"> JC's Tree Service </h1>
        </div>
        <Body/>
        <Footer/>
        </div>
    )
}
export default App