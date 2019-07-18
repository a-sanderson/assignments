import React from "react"
import Navbar from "./Navbar.js"
import About from "./About.js"
import Contact from "./Contact.js"
import Home from "./Home.js"
import {Switch,Route} from "react-router-dom"

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </div>
    )
}
export default App
