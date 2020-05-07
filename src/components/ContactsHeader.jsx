import React from "react";

const ContactsHeader = () => {
  return (
    <article className="contact header-contact">
      <span className="contact__avatar" />
      <span className="contact__data">Nome</span>
      <span className="contact__data">Telefone</span>
      <span className="contact__data">País</span>
      <span className="contact__data">Admissão</span>
      <span className="contact__data">Empresa</span>
      <span className="contact__data">Departamento</span>
    </article>
  );
};

export default ContactsHeader;
