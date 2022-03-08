import React, { useState } from "react";
import { Divider } from "semantic-ui-react";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [location, setLocation] = useState("");

  return (
    <form
      className="form-style"
      onSubmit={(e) => {
        console.log("Hit here");
        e.preventDefault();

        let newContact = {
          name: name,
          phoneNumber: phoneNumber,
          location: location,
        };
        props.addContact(newContact);
        setName("");
        setphoneNumber("");
        setLocation("");
      }}
    >
      <h2 className="style-direction">React Redux Users</h2>
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <h3 className="style-direction">CONTACTS</h3>
          <label>Name:</label>
          <input
            className="style1"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label>Phone Number:</label>
          <input
            className="style3"
            type="number"
            placeholder="PhoneNumber"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label>Location:</label>
          <input
            className="style2"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      <button className="button-style" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
