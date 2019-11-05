import React from "react";
import { Link } from "react-router-dom";

import { MdMailOutline } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";

import { Container } from "./styles";

export default function() {
  return (
    <Container>
      <h1>Falta pouco pra matar sua fome!</h1>
      <h2>Como deseja continuar?</h2>

      <div className="sign-actions">
        <Link to="/login-email" className="btn btn-facebook">
          <IoLogoFacebook className="icon" /> <span>Facebook</span>{" "}
        </Link>
        <Link to="/login-email" className="btn btn-email">
          <MdMailOutline className="icon" /> <span>E-mail</span>{" "}
        </Link>
      </div>
    </Container>
  );
}
