import React, { useState } from "react";

import { Container } from "./styles";
import api from "../../../services/api";

export default function({ history }) {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState(false);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(user);
    let response = await api.post("/auth/customers", {
      email: user.email,
      password: user.password
    });

    const { id } = response.data;
    if (id) {
      localStorage.setItem("userId", id);
      history.push("/dashboard");
    } else setError(true);

    console.log(error);

    console.log(response.data);
  };
  return (
    <Container>
      <div className="login-form">
        <h2 className="form--title">Informe os seus dados</h2>
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
