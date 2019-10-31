import React from "react";

import { Container, Header, Main } from "./styles";

import logo from "../../assets/logo.png";
import { MdMyLocation } from "react-icons/md";

export default function Home() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Brand" />
        <div className="landing-login-menu">
          <a href="/#" className="btn btn--sign-up">
            Cadastre seu restaurante
          </a>
          <a href="/#" className="btn btn--sign-in">
            Entrar
          </a>
        </div>
        <div className="landing-title">
          <h1>Delivery de comida nunca foi tão fácil</h1>
          <h2>Descubra restaurantes perto de você</h2>
        </div>
        <div className="button-wrapper">
          <a href="/#" className="btn btn--search-restaurant">
            <MdMyLocation className="icon--search-restaurant" />
            <span>Buscar Restaurantes</span>
          </a>
        </div>
      </Header>
      <Main></Main>
    </Container>
  );
}
