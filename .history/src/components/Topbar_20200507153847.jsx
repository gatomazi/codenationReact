import React, { useContext } from "react";

import { ReactComponent as LogoSvg } from "../assets/img/logo.svg";

import { ContactContext } from "../contexts/ContactsContext";

const Topbar = () => {
  const { setSearch } = useContext(ContactContext);
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
