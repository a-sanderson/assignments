import React from "react"
import Home from "./Home.js"
import Header from "./Header.js"

class App extends React.Component{

    // constructor(){
    //     super()
    //     this.state - {
    //         backGroundColor: "red"
    //     }
    // }
   
    
    
    
    handleScroll = (e) => {
      document.getElementById("header").classList.add("red")
    }
    render(){
          return(
            <>
            <Header onScroll= {this.handleScroll} />
            <Home/>
            </>
        )
    }
}

export default App