import React, { useState } from "react";

import SuccessMessage from "../../components/SuccessMessage";

import "./UserForm.scss";

const UserForm = () => {
  const [submit, setSubmit] = useState(false);
  const [user, setUser] = useState({
    name: "Zé",
    username: "ZePequeno",
    email: "ze_pequeno@yahoo.com",
  });

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAddUser = (event) => {
    event.preventDefault();

    const postObject = JSON.stringify(user);

    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: postObject,
    }).then(() => setSubmit(true));
  };

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {user.avatar ? (
                  <img src={user.avatar} alt="" />
                ) : (
                  <img
                    src="https://icon-icons.com/icons2/1368/PNG/512/-avatar_89781.png"
                    alt=""
                  />
                )}
              </div>

              {user.name && (
                <p className="user__name">
                  {user.name}
                  <span>@{user.username}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              value={user.name}
              placeholder="Ex: Fulano da Silva"
              name="name"
              onChange={(event) => handleChanges(event)}
            />

            <label>Usuário</label>
            <input
              type="text"
              value={user.username}
              placeholder="Ex: fulano_da_silva"
              name="username"
              onChange={(event) => handleChanges(event)}
            />

            <label>Email</label>
            <input
              type="email"
              value={user.email}
              placeholder="Ex: fulano@provedor.com"
              name="email"
              onChange={(event) => handleChanges(event)}
            />

            <label>
              Url da Imagem de Perfil (use a url da imagem do Linkedin)
            </label>
            <input
              type="text"
              placeholder="http://..."
              value={user.avatar}
              name="avatar"
              onChange={(event) => handleChanges(event)}
            />

            <button type="button" onClick={(event) => handleAddUser(event)}>
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      {submit && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;
