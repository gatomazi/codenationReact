import React, { useEffect, useState, useContext } from "react";

import Contact from "./Contact";
import ContactsHeader from "./ContactsHeader";
import { ContactContext } from "../contexts/ContactsContext";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  const { search, typeFilter } = useContext(ContactContext);
  useEffect(() => {
    const fetchData = async () => {
      fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
        .then((response) => response.json())
        .then((response) => setContacts(response));
    };

    fetchData();
  }, []);
  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div className="container">
      <section className="contacts">
        <ContactsHeader />
        {contacts.length > 0 && (
          <article>
            {contacts.map((contact) => (
              <Contact contact={contact} />
            ))}
          </article>
        )}
      </section>
    </div>
  );
};

export default Contacts;
