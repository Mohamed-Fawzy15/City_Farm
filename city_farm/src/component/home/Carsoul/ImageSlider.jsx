import Carousel from "react-bootstrap/Carousel";
import img1 from "../../photos/cover.jpeg";
import img2 from "../../photos/cover 2.jpg";
import img3 from "../../photos/cover 3.jpg";
import img4 from "../../photos/cover 4.jpg";
import img5 from "../../photos/cover 5.jpg";
import img6 from "../../photos/cover 6.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carsoulStyle.css";
// import { useNavigate } from "react-router-dom";

function ImageSlider() {
  // const navigate = useNavigate();

  return (
    <Carousel className="carsoulSilder">
      <Carousel.Item>
        <img className="d-block w-100 carImg" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carImg" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carImg" src={img3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carImg" src={img4} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carImg" src={img5} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carImg" src={img6} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
