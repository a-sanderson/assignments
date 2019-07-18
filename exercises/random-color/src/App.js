import React from "react"
import axios from "axios"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            colorsArr : []
        }
    }

    componentDidMount = () => {
        axios.get("http://www.colr.org/json/colors/random/7" )
        .then(res => {
            this.setState({
                colorsArr: res.data.colors
            })
        })
        .catch(err => console.log(err))
    }

    render(){
        const mappedColors = this.state.colorsArr.map((color, i) => {
            return (
                <div key={color.id + i} style={{height: "200px", width: "200px",  backgroundColor: `#${color.hex}`}}>
                    <h1>{color.tags[0].name}</h1>
                </div>
            )
        })
        console.log(mappedColors)


        return(

            <div style={{height: "100vh"}}>
                {mappedColors}
            </div>

        )
    }
}
export default App 