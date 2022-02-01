import React from "react";

const ContactList = (props) => {
    return (
        <div>
            {props.contacts.map((contact, index) => {

                return (
                    <div key={index}>
                        <h1>{contact.name}</h1>
                        <h3>{contact.phoneNumber}</h3>
                        <h3>{contact.location}</h3>

                    </div>
                );
            })}
        </div>
    );
};

export default ContactList;