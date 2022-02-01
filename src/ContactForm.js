import React, { useState } from "react";

const ContactForm = (props) => {
    const [name, setName] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [location, setLocation] = useState("");

    return (
        <form
            onSubmit={(e) => {
                console.log('Hit here')
                e.preventDefault();

            let newContact ={
                name: name,
                phoneNumber: phoneNumber,
                location: location,
            };
            props.addContact(newContact);
            setName("");
            setphoneNumber("");
            setLocation("");
            }}>

            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder="PhoneNumber" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)}/> 
            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}/>

            <button type="submit">Add contact</button>
        </form>
    )
} 

export default ContactForm;