import React from "react"
import aaron from "./aaron.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGit} from "@fortawesome/free-brands-svg-icons"
import {faNodeJs} from "@fortawesome/free-brands-svg-icons"
import {faSass} from "@fortawesome/free-brands-svg-icons"
import {faJs} from "@fortawesome/free-brands-svg-icons"
import {faReact} from "@fortawesome/free-brands-svg-icons"
import Card from "./Card.js"



const Home = props => {

    return(
        <main style={{height: "800px", position: "relative", zIndex: "0"}}>
            <section className="homeTop">
                <div className= "projectTitle">
                    <h3>PROJECTS & RESUME</h3>
                </div>
                <h1>Organized and results driven with a natural knack for leading.</h1>
            </section>
            <section className="homeBottom">
                <div className="iconsMyname">
                    <div className="imageContainer">
                        <img className="aaron" src={aaron} alt="me"></img>
                    </div>
                    <div className= "vertContainer">
                        <h4> Aaron Sanderson's portfolio</h4>
                        <a href="#tech">view technical skills</a>
                    </div>
                </div>    
            </section>
            <div id="tech" className="iconContainer">
                        <Card icon= {<FontAwesomeIcon icon={faGit} size= "4x" />} description= "I use Git and GitHub frequently for save points and colaboration" />

                        <Card icon= {<FontAwesomeIcon icon={faReact} size= "4x" />} description= "React is my preferreed base library/framework for development" />

                        <Card icon= {<FontAwesomeIcon icon={faSass} size= "4x" />} description= "Along with CSS3, I use SASS, or SCSS as my preferred pre-processor for styling to provide efficiency" />

                        <Card icon= {<FontAwesomeIcon icon={faJs} size= "4x" />} description= "JavaScript version ES6 is the language I am skilled in " />

                        <Card icon= {<FontAwesomeIcon icon={faNodeJs} size= "4x" />} description= "I am in the process of learning Python, but for now I am very familiar with Node JS, and us it on the backend for module, data handling, as well as testing in the console." />
            </div>
        </main>
    )
}
export default Home

{/* <FontAwesomeIcon icon={faGit} size= "4x" />
<FontAwesomeIcon icon={faNodeJs} size= "4x" />
<FontAwesomeIcon icon={faSass} size= "4x" />
<FontAwesomeIcon icon={faJs} size= "4x" />
<FontAwesomeIcon icon={faReact} size= "4x" /> */}