import React, { useState } from "react";

const ContactContext = React.createContext("");

const ContactProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <ContactContext.Provider value={{ search, setSearch }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactProvider, ContactContext };
