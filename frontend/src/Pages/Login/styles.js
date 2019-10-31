import styled from "styled-components";

import bg from "../../assets/login-bg.jpg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-repeat: no-repeat;
  background-image: url(${bg});
  background-position: center center;

  h1 {
    font-size: 3.75rem;
    font-weight: bold;
    color: #414143;
    letter-spacing: -3px;
  }

  h2 {
    margin-top: -5px;
    font-size: 1.75rem;
    font-weight: bold;
    color: #717171;
    margin-bottom: 30px;
  }

  .btn {
    background: transparent;
    text-decoration: none;
    color: #fff;
    border: none;
    padding: 0 20px;
    border-radius: 4px;
    margin: 3px 0;
    height: 50px;
    font-weight: bold;
    transition: 100ms;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .sign-actions {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;

    .icon {
      font-size: 1.5rem;
      position: absolute;
      left: 15px;
    }
    .btn-facebook {
      background: #4065b4;
      margin-bottom: 20px;
    }

    .btn-email {
      background: #ea1d2c;
    }
  }
`;
