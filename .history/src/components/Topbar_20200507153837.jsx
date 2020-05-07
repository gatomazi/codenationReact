import React, { useContext } from "react";

import { ReactComponent as LogoSvg } from "../assets/img/logo.svg";

import { ContactsContext } from "../contexts/ContactsContext";

const Topbar = () => {
  const { setSearch } = useContext(ContactsContext);
  return (
    <header className="topbar">
      <div className="container">
        <a href="/" className="topbar__logo">
          <LogoSvg alt="Logo Instagram" />
        </a>
      </div>
    </header>
  );
};

export default Topbar;
