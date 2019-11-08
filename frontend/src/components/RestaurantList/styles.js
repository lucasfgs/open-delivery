import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
`;

export const Card = styled.div`
  border: 1px solid #f2f2f2;
  display: grid;
  transition: 200ms;
  height: 90px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  width: 100%;
  grid-template-columns: 85px 1px 1fr;
  grid-template-rows: 1fr 20px;
  grid-template-areas:
    "logo divider title"
    "logo divider content";
  grid-column-gap: 20px;
  cursor: pointer;

  :hover {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
  }

  ::before {
    grid-area: divider;
    content: "";
    width: 1px;
    background-color: #f2f2f2;
  }

  .logo-wrapper {
    background: #fff;
    border-radius: 4px 0 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
      width: 85px;
      height: 85px;
      border-radius: 4px;
      transition: 200ms;
      object-fit: contain;
    }
  }
`;

export const Text = styled.div`
  color: #717171;

  .restaurant-name {
    color: #3e3e3e;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    height: 18px;
  }

  .restaurant-info {
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 1.0625rem;

    .restaurant-rating {
      color: #e7a74e;
      line-height: 0;
      font-size: 0.9375rem;
      flex-shrink: 0;
      height: auto;
      min-width: 40px;
    }
  }

  .restaurant-delivery {
    margin: 0;
    width: 100%;
    display: flex;
    align-items: flex-end;
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 0.9375rem;
  }
`;
