import styled from "styled-components";

import bg1 from "../../assets/bg1.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100vw;
  max-height: 50vh;
  display: flex;
  flex-direction: column;

  .landing-bg {
    background: url(${bg1}) top left;
    background-color: #f4f4f4;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: 50ms;
  }

  .landing-bg--left {
    width: 500px;
    height: 500px;
    display: block;
    position: absolute;
    z-index: -1;
    left: -20vh;
    top: 260px;
  }

  .landing-bg--right {
    width: 751px;
    height: 600px;
    display: block;
    position: absolute;
    left: 140vh;
    z-index: -1;
  }

  img {
    width: 100px;
    height: 50px;
    position: absolute;
    top: 75px;
    left: calc(50% - 50px);
  }
  .btn {
    background: transparent;
    text-decoration: none;
    color: #ea1d2c;
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

  .landing-login-menu {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;

    .btn--sign-up {
      width: 200px;
      height: 48px;
      margin-right: 18px;
      font-size: 1rem;
    }

    .btn--sign-in {
      width: 100px;
      height: 48px;
      margin-right: 27px;
      font-size: 1rem;
      background: #fff;
      border: 1px solid #dcdcdc;
    }

    .btn--sign-in:hover {
      background: #ea1d2c;
      color: #fff;
    }
  }

  .landing-title {
    text-align: center;
    max-width: 640px;
    margin: 0 auto;
    margin-top: 190px;
    color: #3e3e3e;
    letter-spacing: -1px;

    h1 {
      font-size: 4.3125rem;
      line-height: 4.9375rem;
    }

    h2 {
      margin-top: -25px;
      font-weight: 300;
      font-size: 1.875rem;
    }
  }

  .button-wrapper {
    display: flex;
    width: 100%;

    .btn--search-restaurant {
      display: flex;
      justify-content: space-evenly;
      padding: 0;
      margin: 0 auto;
      margin-top: 18px;
      width: 100%;
      max-width: 360px;
      height: 60px;
      background: #ea1d2c;
      color: #fff;
    }

    .icon--search-restaurant {
      font-size: 2rem;
    }

    span {
      font-size: 1.5rem;

      font-weight: 300;
    }
  }
`;

export const Main = styled.div`
  height: 50vh;
`;
