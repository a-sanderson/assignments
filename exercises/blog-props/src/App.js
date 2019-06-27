import React from "react"
import Bloglist from "./Bloglist.js"
import Header from "./Header.js"
import Navbar from "./Navbar.js"
import Button from "./Button.js"
const App = ()=> {
    return (
        <main>
            <Navbar/>
            <Header/>
            <Bloglist/>
            <Button/>
        </main>
    )
}

export default App