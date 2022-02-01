// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";


const App = () => {
  const [contacts, setContacts] = useState([
    {name: "Gideon", phoneNumber: "0244419419", location: "Achimota"},
    {name: "Yooku", phoneNumber:"0453333322", location:"London"},
    {name: "Raymond", phoneNumber: "0447982312", location: "Chicago"},
  
  ]);
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
    <ContactForm addContact={addContact} />
    <ContactList contacts={contacts} />
    </div>
  );
};



export default App;
