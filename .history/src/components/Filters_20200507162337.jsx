import React, { useContext } from "react";

import { ContactContext } from "../contexts/ContactsContext";

const Filters = () => {
  const { setSearch, setTypeFilter, typeFilter } = useContext(ContactContext);
  return (
    <div className="container" data-testid="filters">
      <section className="filters">
        <div className="filters__search">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="filters__search__input"
            placeholder="Pesquisar"
          />

          <button className="filters__search__icon">
            <i className="fa fa-search" />
          </button>
        </div>

        <button
          onClick={() => setTypeFilter("name")}
          className={
            "filters__item " + (typeFilter === "name" && "is-selected")
          }
        >
          Nome <i className="fas fa-sort-down" />
        </button>

        <button
          onClick={() => setTypeFilter("country")}
          className={
            "filters__item " + (typeFilter === "country" && "is-selected")
          }
        >
          País <i className="fas fa-sort-down" />
        </button>

        <button
          onClick={() => setTypeFilter("company")}
          className={
            "filters__item " + (typeFilter === "company" && "is-selected")
          }
        >
          Empresa <i className="fas fa-sort-down" />
        </button>

        <button
          onClick={() => setTypeFilter("department")}
          className={
            "filters__item " + (typeFilter === "department" && "is-selected")
          }
        >
          Departamento <i className="fas fa-sort-down" />
        </button>

        <button
          onClick={() => setTypeFilter("admissionDate")}
          className={
            "filters__item " + (typeFilter === "admissionDate" && "is-selected")
          }
        >
          Data de admissão <i className="fas fa-sort-down" />
        </button>
      </section>
    </div>
  );
};

export default Filters;
