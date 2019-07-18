import React from "react"
import walter from "./walter.jpg"

const Home = () => {
    return (
        <div>
            <div className="titleContainer">
                <h1>Meth Head Removers</h1>
                <h2>Getting them off your block</h2>
            </div>
            
            <div className="walterBox">
                <div className="imageContainer">
                    <img alt="walt" src={walter}></img>
                </div>
                <p>Lorem ipsum dolor amet meditation post-ironic messenger bag vaporware selfies taxidermy. Ennui banh mi cronut, quinoa hot chicken keffiyeh mumblecore. Put a bird on it taiyaki butcher williamsburg shaman. Tumblr selvage pour-over kickstarter live-edge vape keytar. Humblebrag +1 craft beer actually, direct trade truffaut neutra. Art party cronut scenester edison bulb pour-over, williamsburg keytar ugh.

                </p>
                
            </div>
        </div>
    )
}
export default Home