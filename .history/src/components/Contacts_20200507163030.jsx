/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";

import Contact from "./Contact";
import ContactsHeader from "./ContactsHeader";
import { ContactContext } from "../contexts/ContactsContext";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [originalContacts, setOriginalContacts] = useState([]);

  const { search, typeFilter, setTypeFilter } = useContext(ContactContext);

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
        .then((response) => response.json())
        .then((response) => {
          setOriginalContacts(response);
          setContacts(response);
        });
    };
    setTypeFilter("name");
    fetchData();
  }, []);

  useEffect(() => {
    let newContacts;
    if (typeFilter.length > 0) {
      newContacts = originalContacts.filter((contact) => {
        let comparisionVar = contact[typeFilter];
        if (typeFilter === "admissionDate") {
          comparisionVar = new Date(comparisionVar).toLocaleDateString();
        }
        return comparisionVar.toLowerCase().includes(search.toLowerCase());
      });
      setContacts(newContacts);
    }
  }, [search, typeFilter]);

  return (
    <div className="container" data-testid="contacts">
      <section className="contacts">
        <ContactsHeader />
        {contacts.length > 0 && (
          <article>
            {contacts.map((contact, index) => (
              <Contact key={index} data={contact} />
            ))}
          </article>
        )}
      </section>
    </div>
  );
};

export default Contacts;
