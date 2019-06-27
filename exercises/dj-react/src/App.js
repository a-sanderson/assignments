import React from "react"
import Box1 from "./Box1.js"
import Box2 from "./Box2.js"
import Box3 from "./Box3.js"
import Box4 from "./Box4.js"


class App extends React.Component {
    constructor(){
        super()
       this.state = {
           box1Color: "black",
           box2Color: "black",
           box3Color: "black",
           box4Color: "black",
       }
       this.audio=this.audio.bind(this)
    }
    audio =()=>{
        new Audio("../public/laughSound.wav")
    }
    blackAndWhite = () => {
        this.setState({
          box1Color:this.state.box1Color === "black" ? "white": "black",
          box2Color:this.state.box2Color === "black" ? "white": "black",
          box3Color:this.state.box3Color === "black" ? "white": "black",
          box4Color:this.state.box4Color === "black" ? "white": "black",
        })
         
    }
    purpleTop = () => {
        this.setState({
            box1Color: this.state.box1Color === "black" || "white" ? "purple": "black",
            box2Color: this.state.box2Color === "black" || "white" ? "purple": "black"
        })
    }
    bottomLeft = () => {
        this.setState({
            box3Color: this.state.box3Color === "black" || "white" ? "blue": "black",    
        })
    }
    bottomRight = () => {
        this.setState({
            box4Color: this.state.box3Color === "black" || "white" ? "blue": "black",    
        })
    }
    render(){
        const audio = new Audio("../public/laughSound.wav")
        return (
            <main>
                <section style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                    <div id ="djContainer">
                        <Box1 color={this.state.box1Color}/>
                        <Box2 color={this.state.box2Color}/>
                        <Box3 color={this.state.box3Color}/>
                        <Box4 color={this.state.box4Color}/>
                    </div>
                </section>
                <div>
                    <button className="button" onClick={(event) => { this.blackAndWhite(); audio.play();}}>B&W</button>
                    <button className="button" onClick={this.purpleTop}>Top Purps</button>
                    <button className='button' onClick={this.bottomLeft}>BL BLUE</button>
                    <button className="buton" onClick={this.bottomRight}>BR BLUE</button>
                </div>  
            </main>      
        )
    }
}

export default App