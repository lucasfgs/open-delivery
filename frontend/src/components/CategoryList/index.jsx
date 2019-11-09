import React from "react";

import { Container, Item } from "./styles.js";

export default function CategoryList() {
    return (
        <Container>
            <Item>
                <a href="/#" className="item-wrapper">
                    <img
                        src="https://abrilmdemulher.files.wordpress.com/2016/09/receita-feijoada.jpg?quality=90&strip=info"
                        alt="Feijoada"
                        className="item__img"
                    />
                    <span className="item__title">Brasileira</span>
                </a>
            </Item>

            <Item>
                <a href="/#" className="item-wrapper">
                    <img
                        src="https://www.nutrimixassessoria.com.br/wp-content/uploads/2019/01/e-seguro-comer-sushi-conheca-os-riscos-da-comida-japonesa-1140x641.jpg"
                        alt="Sushi"
                        className="item__img"
                    />
                    <span className="item__title">Japonesa</span>
                </a>
            </Item>
        </Container>
    );
}
