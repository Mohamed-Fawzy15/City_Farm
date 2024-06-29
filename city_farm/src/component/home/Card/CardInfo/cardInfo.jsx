import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import cat1Img from "../img/images (1).jpg";
import "./cardInfoStyle.css";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

function CardInfo({ product }) {
  const navigate = useNavigate();
  const [cardAnimte, setcardAnimte] = useState(false);

  const startcardAnimate = () => {
    if (window.scrollY >= 200 && window.scrollY <= 900) {
      // console.log(window.scrollY);
      setcardAnimte(true);
    } else {
      setcardAnimte(false);
    }
  };
  window.addEventListener("scroll", startcardAnimate);

  return (
    <div className="infoHolder">
      <div className="cardInfoHolder">
        {product.map((products) => (
          <Card
            key={products.id}
            style={{ width: "18rem" }}
            className="cardContanier"
          >
            <Card.Img
              variant="top"
              src={products.img}
              className={cardAnimte ? "cardImage spinImg" : "hideimg"}
            />
            <Card.Body>
              <Card.Title>{products.name}</Card.Title>
              <Card.Text className="cardText">{products.price}</Card.Text>
              <Card.Text className="cardText">{products.desc}</Card.Text>
              <Button
                variant="primary"
                className="btn"
                onClick={() => navigate("/categroies")}
              >
                Disover
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardInfo;
