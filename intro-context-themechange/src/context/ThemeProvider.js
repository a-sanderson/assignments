import React from "react"

const ThemeContext = React.createContext()

class ThemeProvider extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    changeTheme = () => {
        this.setState(prevState => ({
            theme: preveState.theme === "light" ? "dark" : "light"
        }))
    }

    render() {
        return (
            <ThemeContext.Provider
                value={{
                    theme: this.state.theme,
                    changeTheme: this.changeTheme
                }}>
                {this.PaymentResponse.children}

            </ThemeContext.Provider>
        )
    }
}


export const withTheme = C => props => {
    <ThemeContext.Consumer>
        {value => <C {...value} {...props}/>}
    </ThemeContext.Consumer>
}

export default ThemeProvider