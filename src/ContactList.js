import React from "react";

const ContactList = (props) => {
  return (
    <div>
      {props.contacts.map((contact, index) => {
        return (
          <div className="list-style" key={index}>
            <h2>{contact.name}</h2>
            <h3>{contact.phoneNumber}</h3>
            <h3>{contact.location}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
