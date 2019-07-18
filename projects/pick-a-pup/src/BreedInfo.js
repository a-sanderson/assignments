import React from "react"
import SearchBar from "./SearchBar.js"
import axios from "axios"
import {Link} from 'react-router-dom';


export default class Info extends React.Component {
    constructor(){
        super()
        this.state = {
            breedTerm: "",
            breeds: [],
            
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault()
        
        axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${this.state.breedTerm}`,{
            headers: {
               "x-api-key":  `${process.env.REACT_APP_KEY}`
            }
        })
        
        .then(res=> {
            this.setState({
                breeds: res.data
            })
        } )
        .catch(err => console.log(err))

    }

    render(){
        const mappedBreeds = this.state.breeds.map(breed => 
        <div style={{display: "flex", flexDirection: "clumn", justifyContent: "space-evenly", alignItems: "center"}}>
            <Link className="breedLink"  key={breed.id} to={{pathname:`/info/${breed.id}`, state: {...breed}}}>{breed.name}</Link>
        </div>)
        

        return(
            <div>
                <div style={{marginTop: "400", marginBottom: "10", height: "20%", padding: "100px"}}>
                    <SearchBar
                        handleSubmit = {this.handleSubmit}
                        breedTerm = {this.state.breedTerm}
                        handleChange = {this.handleChange}
                        name = "breedTerm"
                        buttonText = "get breeds"
                        placeholder = "search breeds"
                    />
                </div>
                {mappedBreeds}
            
            </div>
        )
    }
}
