import styled from "styled-components";

import bg from "../../../assets/login-bg.jpg";

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

  .login-form {
    padding: 40px;
    background: #fff;
    width: 100%;
    max-width: 480px;
    border-radius: 4px;
    box-shadow: 4px 4px 44px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }

  .form--title {
    color: #717171;
    font-size: 1.75rem;
    margin: 0 0 30px;
    font-weight: bold;
    line-height: 1.23;
    text-align: center;
  }

  .form--input {
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    padding: 13px 20px;
    height: auto;
    line-height: 20px;
    margin-bottom: 15px;
  }

  .form--btn {
    margin-top: 30px;
    background: #ea1d2c;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1em;
    flex-grow: 1;
    position: relative;
    top: 1px;
    text-align: center;
    cursor: pointer;
  }

  .form--btn:hover {
    background: #c40d19;
  }
`;
