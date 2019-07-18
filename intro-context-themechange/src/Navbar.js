import React from "react"

const Navbar = props => {
    return(
        <nav>
            <a>home</a>
            <a>about</a>
            <a>contact</a>
            <a>page</a>
            <a>whatever</a>
        </nav>
    )
}

export default withTheme(Navbar)