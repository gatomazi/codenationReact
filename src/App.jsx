import React from "react";

import "./App.scss";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import { ContactProvider } from "./contexts/ContactsContext";

class App extends React.Component {
  render() {
    return (
      <ContactProvider>
        <Topbar />
        <Filters />
        <Contacts />
      </ContactProvider>
    );
  }
}

export default App;
