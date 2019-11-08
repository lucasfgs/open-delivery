import React from "react";

import { FiSearch, FiLogOut, FiShoppingBag } from "react-icons/fi";
import { TiLocationOutline } from "react-icons/ti";
import { MdKeyboardArrowDown } from "react-icons/md";

import CategoryList from "../../components/CategoryList";

import {
  Container,
  Header,
  HeaderSearch,
  HeaderDelivery,
  HeaderLinks,
  Category
} from "./styles";
import logo from "../../assets/logo.png";

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="" />
        <HeaderSearch>
          <form action="" className="header-search__form">
            <div className="header-search__field-wrapper">
              <input
                type="text"
                className="header-search__field"
                label="Busque por prato ou restaurante"
                placeholder="Busque por prato ou restaurante"
              />
            </div>
            <FiSearch className="header-search__icon" />
          </form>
        </HeaderSearch>
        <HeaderDelivery>
          <span className="delivery__title">Entregar em</span>
          <button className="delivery__input">
            <TiLocationOutline className="delivery__input-location-icon" />
            <div className="delivery__input-item">
              <span className="delivery__input-address">Endereço</span>
              <MdKeyboardArrowDown className="delivery__input-arrow-icon" />
            </div>
          </button>
        </HeaderDelivery>
        <HeaderLinks>
          <a href="/#" className=" btn--link ">
            <FiShoppingBag className="link--icon" />
            Sacola
          </a>
          <a href="/#" className=" btn--link ">
            <FiLogOut className="link--icon" />
            Sair
          </a>
        </HeaderLinks>
      </Header>
      <Category>
        <h3 className="category__title">Categorias</h3>
        <CategoryList />
      </Category>
    </Container>
  );
}
