import React from "react"
import axios from "axios"
import Hit from "./Hit.js"
import List from "./List.js"
import backGround from "./backGround.jpg"
import Header from "./Header.js"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            hitsArr : []
        }
    }
    componentDidMount = () => {
        axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json")
            
            .then(res => {
                this.setState({
                    hitsArr: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        const mappedHits = this.state.hitsArr.map((hit, i) => {
                                    return(                    
                                            <Hit 
                                            key= {i}
                                            image= {hit.image}
                                             name={hit.name} /> )

        })
        return(
            <main>
            <Header/>
            <div style= {{backgroundImage: `url(${backGround})`, backgroundSize: "cover",}}>
                <List hitList= {mappedHits}/>
            </div>
            </main>
        )
    }
}
export default App