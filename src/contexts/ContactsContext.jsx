import React, { useState } from "react";

const ContactContext = React.createContext("");

const ContactProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  return (
    <ContactContext.Provider
      value={{ search, setSearch, typeFilter, setTypeFilter }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export { ContactProvider, ContactContext };
