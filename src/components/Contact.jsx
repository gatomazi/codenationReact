import React from "react";

const Contact = ({ data }) => {
  const contact = data;
  const dataAdmissao = new Date(contact.admissionDate).toLocaleDateString();
  return (
    <article className="contact" data-testid="contact">
      <span data-testid="contact-avatar" className="contact__avatar">
        <img src={contact.avatar} alt={contact.name} />
      </span>
      <span data-testid="contact-name" className="contact__data">
        {contact.name}
      </span>
      <span data-testid="contact-phone" className="contact__data">
        {contact.phone}
      </span>
      <span data-testid="contact-country" className="contact__data">
        {contact.country}
      </span>
      <span data-testid="contact-date" className="contact__data">
        {dataAdmissao}
      </span>
      <span data-testid="contact-company" className="contact__data">
        {contact.company}
      </span>
      <span data-testid="contact-department" className="contact__data">
        {contact.department}
      </span>
    </article>
  );
};

export default Contact;
