import React, { useContext } from "react";

import { ContactContext } from "../contexts/ContactsContext";

const Filters = () => {
  const { setSearch, setTypeFilter } = useContext(ContactContext);
  return (
    <div className="container">
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
          className="filters__item is-selected"
        >
          Nome <i className="fas fa-sort-down" />
        </button>

        <button
          onClick={() => setTypeFilter("country")}
          className="filters__item"
        >
          País <i className="fas fa-sort-down" />
        </button>

        <button
          onClick={() => setTypeFilter("company")}
          className="filters__item"
        >
          Empresa <i className="fas fa-sort-down" />
        </button>

        <button
          onClick={() => setTypeFilter("department")}
          className="filters__item"
        >
          Departamento <i className="fas fa-sort-down" />
        </button>

        <button
          onClick={() => setTypeFilter("dataAdmissao")}
          className="filters__item"
        >
          Data de admissão <i className="fas fa-sort-down" />
        </button>
      </section>
    </div>
  );
};

export default Filters;
