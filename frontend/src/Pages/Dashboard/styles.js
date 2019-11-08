import styled from "styled-components";

export const Container = styled.div`
  overflow-x: hidden;
`;

export const Header = styled.div`
  width: 100%;
  height: 80px;
  background: #fff;
  position: sticky;
  box-shadow: inset 0 -1px 0 #dcdcdc;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 30px;

  img {
    width: 90px;
    height: 45px;
  }
`;

export const HeaderSearch = styled.div`
  width: 100%;
  max-width: 300px;
  min-width: 250px;

  .header-search__form {
    position: relative;
    width: 100%;
  }

  .header-search__icon {
    position: absolute;
    left: 20px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 26px;
    height: 26px;
    pointer-events: none;
    color: #414143;
  }

  .header-search__field-wrapper {
    position: relative;
    width: 100%;
  }
  .header-search__field {
    display: flex;
    height: 50px;
    width: 100%;
    padding-left: 63px;
    padding-right: 42px;
    border: 1px solid #f2f2f2;
    font-size: 1rem;
    line-height: 1.25em;
    font-weight: 300;
    background: #f7f7f7;
    border-radius: 4px;
  }
`;

export const HeaderDelivery = styled.div`
  .delivery__title {
    font-size: 0.875rem;
    height: 12px;
    color: #a6a29f;
    text-transform: uppercase;
    margin: 0 0 5px 0;
  }

  .delivery__input {
    display: flex;
    flex-direction: row;
    appearance: none;
    border: none;
    background-color: #fff;
    padding: 0;
    height: 25px;
    outline: none;

    cursor: pointer;
  }
  .delivery__input-location-icon {
    display: flex;
    width: 20px;
    height: 25px;
    flex-shrink: 0;
    margin: 0 5px 0 0;
  }

  .delivery__input-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .delivery__input-address {
    display: flex;
    align-items: center;
    margin-left: 3px;
    font-size: 1rem;
    font-weight: 300;
    color: #3e3e3e;
  }
  .delivery__input-arrow-icon {
    width: 25px;
    height: 25px;
    flex-shrink: 0;
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .btn--link {
    display: flex;
    align-items: center;
    margin-right: 20px;
    font-size: 1rem;
    margin-left: 3px;
    color: #3e3e3e;
    font-weight: 300;
    text-decoration: none;
    cursor: pointer;
  }

  .btn--link:hover {
    color: #ea1d2c;
  }

  .link--icon {
    width: 23px;
    height: 23px;
    margin-right: 10px;
  }
`;

export const Main = styled.div`
  padding: 0 30px;

  .list__title {
    font-size: 1.125rem;
    color: #414143;
    line-height: 1;
    font-weight: bold;
    padding: 30px 0;
    display: inline-block;
    width: 100%;
    margin: 0;
  }
`;
