import React, { useState, useEffect } from "react";

// we initialise them without default values, to make that happen, we
// apply the Partial helper type.
const EventoContext = React.createContext({});

// const EventoContext = React.createContext('')
const EventoProvider = ({ children }) => {
  const [activeRegister, setActiveRegister] = useState("");

  return (
    <EventoContext.Provider value={{ activeRegister, setActiveRegister }}>
      {children}
    </EventoContext.Provider>
  );
};

export { EventoProvider, EventoContext };
