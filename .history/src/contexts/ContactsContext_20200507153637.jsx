import React, { useState } from "react";

const ContactContext = React.createContext({});

// const ContactContext = React.createContext('')
const ContactProvider = ({ children }) => {
  const [activeRegister, setActiveRegister] = useState("");

  return (
    <ContactContext.Provider value={{ activeRegister, setActiveRegister }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactProvider, ContactContext };
