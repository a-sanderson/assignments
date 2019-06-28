import React from "react"
import HeroList from "./HeroList.js"
import SuperHeader from "./SuperHeader.js"

class App extends React.Component{
    heroMethod = (phrase)=>{
        alert(phrase)
    }
    render(){
        return(
            <div className="body">
                
                <SuperHeader/>  
                <HeroList heroMethod={this.heroMethod}/>
            </div>
        )
    }
}
export default App