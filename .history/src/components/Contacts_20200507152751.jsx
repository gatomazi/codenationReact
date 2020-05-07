import React from "react";

import Contact from "./Contact";
import { useEffect } from "react";
import { useState } from "react";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts").then(
        function (response) {
          console.log(response);
        }
      );
      //   res = res.json();
      //   setContacts(res);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <section className="contacts">
        <article className="contact">
          <span className="contact__avatar" />
          <span className="contact__data">Nome</span>
          <span className="contact__data">Telefone</span>
          <span className="contact__data">País</span>
          <span className="contact__data">Admissão</span>
          <span className="contact__data">Empresa</span>
          <span className="contact__data">Departamento</span>
        </article>
        <article>{/* <Contact /> */}</article>
      </section>
    </div>
  );
};

export default Contacts;
