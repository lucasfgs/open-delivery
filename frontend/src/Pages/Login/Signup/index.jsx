import React, { useState } from "react";

import { Container } from "./styles";
import api from "../../../services/api";

export default function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSubmit = async () => {
    let response = await api.post("/customers", {
      name: user.name,
      email: user.email,
      password: user.password
    });

    console.log(response);
  };

  return (
    <Container>
      <div className="login-form">
        <h2 className="form--title">Informe os seus dados</h2>
        <input
          className="form--input"
          type="text"
          name="name"
          placeholder="Nome"
          onChange={handleChange}
        />
        <input
          className="form--input"
          type="text"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <input
          className="form--input"
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
        />
        <button className="btn form--btn" onClick={handleSubmit}>
          Continuar
        </button>
      </div>
    </Container>
  );
}
