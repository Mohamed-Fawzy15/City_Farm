import "./homePagestyle.css";
import ImageSlider from "./Carsoul/ImageSlider";
// import CardList from "./Card/CardList/cardList";
import Brand from "./Brands/Brand";
import CardSlider from "./NewsCard/CardSlider";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import UpBtn from "../UpBtn/UpBtn";

const HomePage = () => (
  <div className="homepage">
    <NavBar />
    <ImageSlider />

    <div className="container">
      <CardSlider />
      {/* <CardList /> */}
    </div>
    <Brand className="brandPart" />
    <UpBtn />
    <Footer />
  </div>
);

export default HomePage;
