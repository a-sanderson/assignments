import React from "react"
const Form = props => {
    const{handleSubmit, handleChange, firstName, lastName, email,birthPlace,phoneNumber, food, self} = props
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            placeholder="First Name"/>
            <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            placeholder="Last Name"/>
            <input 
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder= "email address"/>
            <input
            type="text"
            name="birthPlace"
            value={birthPlace}
            onChange={handleChange}
            placeholder= "birth place"/>
            <input
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            placeholder="Phone (xxx-xxx-xyxy)"/>
            <input
            type="text"
            name="food"
            value={food}
            onChange={handleChange}
            placeholder="Favorite Food"/>
            <textarea
            rows={10}
            cols={60}
            onChange={handleChange}
            style={{resize: "none"}}
            name="aboutSelf"
            value={self}/>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}
export default Form