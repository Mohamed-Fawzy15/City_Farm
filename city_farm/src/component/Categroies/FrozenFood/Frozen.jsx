import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import UpBtn from "../../UpBtn/UpBtn";
import frozen from "../data.json";
import jucies from "../jucies.json";
import beans from "../beans.json";
import spices from "../spices.json";
import pickles from "../pickles.json";
import snacks from "../snacks.json";
import "./FrozenStyle.css";

const FrozenFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let productData;

  if (id === "1") {
    productData = frozen;
  } else if (id === "2") {
    productData = jucies;
  } else if (id === "3") {
    productData = beans;
  } else if (id === "4") {
    productData = spices;
  } else if (id === "5") {
    productData = pickles;
  } else if (id === "6") {
    productData = snacks;
  } else if (!id) {
    navigate("/home");
  }

  const handleProductClick = (product) => {
    navigate(product.path);
  };

  return (
    <div>
      {productData.map((bg) => (
        <div
          style={{ backgroundImage: `url(${bg.bgImg})` }}
          className="product-page"
          key={bg.id}
        >
          <NavBar />

          <Container>
            <div className="product-carsoul">
              {productData.map((i) => (
                <Carousel className="product-carsoulSilder" key={i.id}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 product-carImg"
                      src={i.img1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>
              ))}
            </div>

            <div className="frozen">
              <div className="frozenFamily">
                {productData.map((p) => (
                  <div className="frozenProducts" key={p.id}>
                    {p.product.map((d) => (
                      <div
                        className="frozenCard"
                        key={d.id}
                        onClick={() => handleProductClick(d)}
                      >
                        <div>
                          <img
                            src={d.img}
                            alt={d.name}
                            className="productImg"
                          />
                          <h3 className="product-name">{d.name}</h3>
                        </div>
                        <div className="product">
                          <div className="Ingredient">
                            <h4>{d.price}</h4>
                            <p>{d.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Container>
          <UpBtn />
          <Footer />
        </div>
      ))}
    </div>
  );
};

export default FrozenFood;
