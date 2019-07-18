import React from "react"
import axios from "axios"
import AdoptSearchBar from "./AdoptSearchBar.js"
import dogOwners from "./images/dogOwners.jpeg"
import hs from "./images/humaneSocietynew.jpg"
import LocationCard from "./LocationCard.js"
import dogGroom from "./images/dogGroom.webp"
import pup from "./images/pup.jpeg"



class Adopt extends React.Component{
    constructor(){
        super()
        this.state = {
            token:"",
            zipCode: "",
            milesFrom: "",
            locations: []

        }
    }
    componentDidMount(){
       const credentials = {
            id:process.env.REACT_APP_ID,
            secret:process.env.REACT_APP_SECRET
        }
        axios.post("https://api.petfinder.com/v2/oauth2/token", {
            grant_type: "client_credentials",
            client_id: credentials.id,
            client_secret: credentials.secret
        })
        .then(res=> {
            this.setState({
                token: res.data.access_token
            })
            console.log(this.state.token)
        } )
        .catch(err => console.log(err))
        
    }
    handleChange = e => {
        const{name, value}= e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        
        axios.get(`https://api.petfinder.com/v2/organizations?location=${this.state.zipCode}&distance=${this.state.milesFrom}`, {
            headers: {
                Authorization: `Bearer ${this.state.token}`
            }
        })
        .then(res => {
            this.setState({
                locations: res.data.organizations,
                zipCode: "",
                milesFrom: ""
            })
        })
        .catch(err => console.log(err))

    }
    render(){
        const mappedLocations = this.state.locations.map(location => 
            <LocationCard key={location.id} 
                name={location.name} 
                id={location.id} 
                location= {location} 
                token={this.state.token} 
                phone={location.phone} 
                address={location.address.address1? location.address.address1 : "N/A"} 
                city={location.address.city} 
                state={location.address.state}
                postcode={location.address.postcode} />
         )
        
        
        
        // <Link key={location.id} to={{pathname:`/adopt/${location.id}`, state: {...location, token: this.state.token}}}>{location.name}</Link>)
        
        return(
            
            <main className="adoptPage">
                <div className="adoptHero">
                    <div style={{width: "100%", height: "92%", backgroundColor: "#212529", opacity: ".5", zIndex: "4",  }}>
                        <h1>There are Thousands of Dogs Waiting to be Adopted</h1>
                     </div>
                </div>
                <section className="adoptInnerGrid">
                    <div className="card">
                        <h2 style={{marginBottom: "20px",fontFamily: "Roboto Condensed", fontSize: "1.5em", fontWeight: "700"}}>There are plenty of reasons to adopt</h2>
                        <h4 style={{marginBottom: "20px", fontFamily: "Roboto, sans-serif"}}>It's not just the right thing to do;adoption is a reward. </h4>
                        <div className="cardImageContainer">
                            <img className="imageFit" alt="owners" src={dogOwners}></img>
                        </div>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                            <p style={{fontFamily: "roboto, sans-serif", fontSize: "1.3em"}}>click for article</p>
                            <a href="https://www.humanesociety.org/resources/top-reasons-adopt-pet">
                                <img alt="adopt" src={hs}></img>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <h2 style={{marginBottom: "20px",fontFamily: "Roboto Condensed", fontSize: "1.5em", fontWeight: "700"}}>Vegan marfa cray la croix retro</h2>
                        <h4 style={{marginBottom: "20px", fontFamily: "Roboto, sans-serif"}}>vape venmo prism cold-pressed man braid. Food truck tattooed . </h4>
                        <div className="cardImageContainer">
                            <img className="imageFit" alt="owners" src={pup}></img>
                        </div>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                            <p style={{fontFamily: "roboto, sans-serif", fontSize: "1.3em"}}>click for article</p>
                            <a href="https://www.humanesociety.org/resources/top-reasons-adopt-pet">
                                <img alt="adopt" src={hs}></img>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <h2 style={{marginBottom: "10px",fontFamily: "Roboto Condensed", fontSize: "1.5em", fontWeight: "700"}}>Your dog wont groom itself</h2>
                        <h4 style={{marginBottom: "20px", fontFamily: "Roboto, sans-serif"}}>Prism DIY artisan wolf occupy, try-hard tumblr biodiesel fingerstache literally waistcoat normcore tacos.</h4>
                        <div className="cardImageContainer">
                            <img className="imageFit" alt="owners" src={dogGroom}></img>
                        </div>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                            <p style={{fontFamily: "roboto, sans-serif", fontSize: "1.3em"}}>click for article</p>
                            <a href="https://www.humanesociety.org/resources/top-reasons-adopt-pet">
                                <img alt="adopt" src={hs}></img>
                            </a>
                        </div>
                    </div>
                </section>    
                <div className="card list">
                    <h2 style={{fontFamily: "Roboto Condensed"}}>Things to consider when picking a dog</h2>
                    <ul>
                        <li>Most dogs live a decade or longer</li>    
                        <li>Consider coat-types for grooming</li>
                        <li>Different breeds have different energy levels</li>
                        <li>Consider exercise requirements</li>
                        <li>Possibly consider an older dog</li>
                        <li>Be open to getting a mixed breed</li>
                        <li>Puppies require a lot of time</li>
                    </ul>

                </div>
            <section className="searchAdoptDisplay">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h1 className="findMember">Find your new family member today</h1>
                    <AdoptSearchBar
                        handleChange={this.handleChange}
                        zipCode={this.state.zipCode}
                        milesFrom={this.state.milesFrom} 
                        handleSubmit={this.handleSubmit} />
                </div>
                <div className="locationList">
                {mappedLocations}

                </div>
            </section>       

            </main>
        )
    }
}

export default Adopt