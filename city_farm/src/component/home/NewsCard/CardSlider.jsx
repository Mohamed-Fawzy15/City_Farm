import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./slider.css";
import { useState } from "react";
import frozenData from "./forzenData.json";
import { useNavigate } from "react-router-dom";

const CardSlider = () => {
  const navigate = useNavigate();

  const [cardAnimte, setcardAnimte] = useState(false);

  const startcardAnimate = () => {
    if (window.scrollY >= 200 && window.scrollY <= 900) {
      setcardAnimte(true);
    } else {
      setcardAnimte(false);
    }
  };
  window.addEventListener("scroll", startcardAnimate);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="newsCard-holder">
      <h1>Our Products</h1>
      <Carousel responsive={responsive} className="newsCard-data">
        {frozenData.map((data) => (
          <div className="newsCard" key={data.id}>
            <Card style={{ width: "15rem" }} className="cardContanier">
              <Card.Img
                variant="top"
                src={data.img}
                className={cardAnimte ? "cardImage spinImg" : "hideimg"}
              />
              <Card.Body className="newsCard-body">
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.desc}</Card.Text>
                <Button
                  variant="primary"
                  className="btn"
                  onClick={() => navigate("/categroies")}
                >
                  Discover
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardSlider;
