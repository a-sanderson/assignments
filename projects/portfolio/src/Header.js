import React from "react"
import HamburgerMenu from "react-hamburger-menu"

class Header extends React.Component {
    constructor(){
        super()
        this.state = {
            open: false,
            isBoxVisible: false
        }
    }
        handleClick = () => {
       
            this.setState(prevState => ({ open: !this.state.open, isBoxVisible: !prevState.isBoxVisible }))
    }

    render(){

        return(
            <header onScroll={this.props.onScroll} className="header">
                <div>
                <h2>Aaron Sanderson,</h2>
                <h2>developer</h2>
                </div>
                
                <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick}
                    width={30}
                    height={25}
                    strokeWidth={4}
                    rotate={0}
                    color='white'
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </header>
        )

    }

}
export default Header