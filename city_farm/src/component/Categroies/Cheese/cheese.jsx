import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { Container } from "react-bootstrap";
import UpBtn from "../../UpBtn/UpBtn";
import "./cheeseStyle.css";

const Cheese = () => {
  return (
    <div className="cheese-holder">
      <NavBar />
      <Container className="cheese-container">
        <div className="product-image-page">
          <img
            src="/images/snacks/chipsfactors.jpg"
            alt="cheese"
            className="product-image"
          />
        </div>
      </Container>
      <UpBtn />
      <Footer />
    </div>
  );
};

export default Cheese;
