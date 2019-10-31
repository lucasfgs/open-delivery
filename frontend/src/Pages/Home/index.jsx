import React from "react";

import { Container, Header, Main } from "./styles";
import { Link } from 'react-router-dom'

import logo from "../../assets/logo.png";

export default function Home() {
  return (
    <Container>
      <Header>
        <div className="login-menu">
          <img src={logo} alt="Brand" />
          <a href="" className="btn btn--sign-up">
            Cadastre seu restaurante
          </a>
          <Link to="/login">
            <a href="" className="btn btn--sign-in">
              Entrar
             </a>
          </Link>
        </div>
        <h1>Delivery de comida nunca foi tão fácil</h1>
        <h2>Descubra restaurantes perto de você</h2>
      </Header>
      <Main></Main>
    </Container>
  );
}
