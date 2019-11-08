import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 17px;

  a {
    text-decoration: none;
  }

  .item__img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
  }

  .item__title {
    text-align: center;
    margin-top: 20px;
    display: block;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.125rem;
    color: #717171;
  }
`;
