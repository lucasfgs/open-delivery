import React from "react";

import { Container } from "./styles";

export default function() {
  return (
    <Container>
      <div className="login-form">
        <h2 className="form--title">Informe o seu e-mail para continuar</h2>
        <input className="form--input" type="text" placeholder="E-mail" />
        <button className="btn form--btn">Continuar</button>
      </div>
    </Container>
  );
}
