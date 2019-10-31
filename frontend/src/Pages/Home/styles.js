import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 100vh;


  .login-menu {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;

    img {
      justify-self: center;
      width: 100px;
      height: 50px;
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
`;

export const Main = styled.div`
  height: 50vh;
`;
