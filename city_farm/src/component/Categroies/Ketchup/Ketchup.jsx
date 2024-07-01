import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { Container } from "react-bootstrap";
import UpBtn from "../../UpBtn/UpBtn";
import "./KetchupStyle.css";

const Ketchup = () => {
  return (
    <div className="ketchup-holder">
      <NavBar />
      <Container className="ketchup-container">
        <div className="product-image-page">
          <img
            src="/images/snacks/ketchup.jpg"
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

export default Ketchup;
