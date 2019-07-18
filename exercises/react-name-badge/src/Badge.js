import React from "react"
const Badge = props => {
    return(
        <div className= "badgeCard">
            <div>
                
                <p>Name: {props.firstName} {props.lastName}</p>
                <p>Place of birth: {props.birthPlace}</p>
                <p>Email: {props.email}</p>
            </div>
            <div>
                <p>Phone: {props.phoneNumber}</p>
                <p>Favorite Food: {props.food}</p>
            </div>
            <div className="description">{props.self}</div>
        </div>
    )
}
export default Badge