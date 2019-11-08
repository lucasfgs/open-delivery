import React from "react";

import { FaStar } from "react-icons/fa";

import { Container, Card, Text } from "./styles";

export default function RestaurantList() {
  return (
    <Container>
      <Card>
        <div className="logo-wrapper">
          <img
            src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/201907291123_3b6a8b1c-a4f8-4aa2-890f-30a75221c901.png"
            alt="Logo"
            className="logo"
          />
        </div>
        <Text>
          <h3>
            <span className="restaurant-name">Fast Açaí Dourados</span>
            <div className="restaurant-info">
              <span className="restaurant-rating">
                <FaStar />
                4.4
              </span>
              • Açaí • 1,1 km
            </div>
          </h3>

          <div className="restaurant-delivery">
            50-60 min •<div className="delivery-fee">Entrega R$ 6.00</div>
          </div>
        </Text>
      </Card>
      <Card>
        <div className="logo-wrapper">
          <img
            src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/201907291123_3b6a8b1c-a4f8-4aa2-890f-30a75221c901.png"
            alt="Logo"
            className="logo"
          />
        </div>
        <Text>
          <h3>
            <span className="restaurant-name">Fast Açaí Dourados</span>
            <div className="restaurant-info">
              <span className="restaurant-rating">
                <FaStar />
                4.4
              </span>
              • Açaí • 1,1 km
            </div>
          </h3>

          <div className="restaurant-delivery">
            50-60 min •<div className="delivery-fee">Entrega R$ 6.00</div>
          </div>
        </Text>
      </Card>
      <Card>
        <div className="logo-wrapper">
          <img
            src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/201907291123_3b6a8b1c-a4f8-4aa2-890f-30a75221c901.png"
            alt="Logo"
            className="logo"
          />
        </div>
        <Text>
          <h3>
            <span className="restaurant-name">Fast Açaí Dourados</span>
            <div className="restaurant-info">
              <span className="restaurant-rating">
                <FaStar />
                4.4
              </span>
              • Açaí • 1,1 km
            </div>
          </h3>

          <div className="restaurant-delivery">
            50-60 min •<div className="delivery-fee">Entrega R$ 6.00</div>
          </div>
        </Text>
      </Card>
      <Card>
        <div className="logo-wrapper">
          <img
            src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/201907291123_3b6a8b1c-a4f8-4aa2-890f-30a75221c901.png"
            alt="Logo"
            className="logo"
          />
        </div>
        <Text>
          <h3>
            <span className="restaurant-name">Fast Açaí Dourados</span>
            <div className="restaurant-info">
              <span className="restaurant-rating">
                <FaStar />
                4.4
              </span>
              • Açaí • 1,1 km
            </div>
          </h3>

          <div className="restaurant-delivery">
            50-60 min •<div className="delivery-fee">Entrega R$ 6.00</div>
          </div>
        </Text>
      </Card>
      <Card>
        <div className="logo-wrapper">
          <img
            src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/201907291123_3b6a8b1c-a4f8-4aa2-890f-30a75221c901.png"
            alt="Logo"
            className="logo"
          />
        </div>
        <Text>
          <h3>
            <span className="restaurant-name">Fast Açaí Dourados</span>
            <div className="restaurant-info">
              <span className="restaurant-rating">
                <FaStar />
                4.4
              </span>
              • Açaí • 1,1 km
            </div>
          </h3>

          <div className="restaurant-delivery">
            50-60 min •<div className="delivery-fee">Entrega R$ 6.00</div>
          </div>
        </Text>
      </Card>
    </Container>
  );
}
