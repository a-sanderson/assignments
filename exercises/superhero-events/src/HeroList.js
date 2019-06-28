import React from "react"
import data from "./Superheros.json"
import SuperHero from "./SuperHero.js"

const HeroList = props =>{
    const mappedHeros = data.map((hero,i)=> 
                                <SuperHero
                                    key={i}
                                    name={hero.name}
                                    show={hero.show}
                                    catchphrase={hero.catchPhrase}
                                    heroImage={hero.imageName}
                                    heroMethod={props.heroMethod}    
                                    />
    
    )
    return(
        <div className="heroList">
            {mappedHeros}
        </div>
    )

}

export default HeroList