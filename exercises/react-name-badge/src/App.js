import React from "react"
import Form from "./Form.js"
import Badge from "./Badge.js"


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            birthPlace:"",
            phoneNumber:"",
            food:"",
            self:"",
            newBadgeArr: []



        }
    }
    handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            [e.target.name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const newBadge = {
            firstName: this.state.firstName,
            lastName:this.state.lastName,
            email: this.state.email,
            birthPlace: this.state.birthPlace,
            phoneNumber: this.state.phoneNumber,
            food: this.state.food,
            self: this.state.self
        }
        this.setState(prevState => ({
            firstName:"",
            lastName:"",
            email:"",
            birthPlace:"",
            phoneNumber:"",
            food: "",
            self: "",
            newBadgeArr:[...prevState.newBadgeArr, newBadge]
        }))
    }

    render(){
        const mappedBadges = this.state.newBadgeArr.map((badge,i)=>
                                                    <Badge
                                                    key={i}
                        
                                                    {...badge}/>)
        return(
            <div>
                <Form
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    birthPlace={this.state.birthPlace}
                    phoneNumber={this.state.phoneNumber}
                    food={this.state.food}
                    self={this.state.self}
                />
                {mappedBadges}
            </div>
        )
    }
}
export default App