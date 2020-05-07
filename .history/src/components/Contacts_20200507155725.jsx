import React, { useEffect, useState, useContext } from "react";

import Contact from "./Contact";
import ContactsHeader from "./ContactsHeader";
import { ContactContext } from "../contexts/ContactsContext";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [originalContacts, setOriginalContacts] = useState([]);

  const { search, typeFilter } = useContext(ContactContext);

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
        .then((response) => response.json())
        .then((response) => {
          setOriginalContacts(response);
          setContacts(response);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    let newContacts;
    if (typeFilter.length > 0) {
      console.log(typeFilter);
      newContacts = originalContacts.filter((contact) => {
        return contact[typeFilter].toLowerCase().includes(search);
      });
      setContacts(newContacts);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, typeFilter]);

  return (
    <div className="container">
      <section className="contacts">
        <ContactsHeader />
        {contacts.length > 0 && (
          <article>
            {contacts.map((contact, index) => (
              <Contact key={index} contact={contact} />
            ))}
          </article>
        )}
      </section>
    </div>
  );
};

export default Contacts;
