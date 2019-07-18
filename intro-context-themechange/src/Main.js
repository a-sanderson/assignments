import React from "react"

const Main = props => {
    return(
        <main>
            <h1>This is the Main Page!!!</h1>
            <button>Toggle Theme</button>
        </main>
        
    )
}

export default withTheme(Main)