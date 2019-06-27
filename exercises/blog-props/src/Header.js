import React from "react"
import Navbar from "./Navbar.js"
const Header = () =>{
    return(
        <section className="headerClass" >
            <div className="overlay">
            <div className="headTitle">
                    <h1 className="title">Clean Blog</h1>
                    <h3>A Blog Theme by Start Bootstrap</h3>
            </div>
            </div>
            {/* <Navbar style={{position:"fixed"}}/> */}
        
        </section>
    )
}

export default Header