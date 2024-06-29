import { Container } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./MediaStyle.css";
import { useState } from "react";
import UpBtn from "../UpBtn/UpBtn";
import Card from "react-bootstrap/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaBookAtlas } from "react-icons/fa6";
// import Card from "react-bootstrap/Car";

const Media = () => {
  const [zawya, setZawya] = useState(true);
  const [ex1, setEx1] = useState(false);
  const [ex2, setEx2] = useState(false);
  const [ex3, setEx3] = useState(false);

  const handleZawyaArticle = () => {
    setZawya(true);
    setEx1(false);
    setEx2(false);
    setEx3(false);
  };
  const handleEx1Article = () => {
    setZawya(false);
    setEx1(true);
    setEx2(false);
    setEx3(false);
  };
  const handleEx2Article = () => {
    setZawya(false);
    setEx1(false);
    setEx2(true);
    setEx3(false);
  };
  const handleEx3Article = () => {
    setZawya(false);
    setEx1(false);
    setEx2(false);
    setEx3(true);
  };

  const articales = [
    {
      id: 1,
      link: 1,
      func: handleZawyaArticle,
      article: zawya,
      name: "Zawya",
      href: "#1",
      image: "/articales/art1.png",
      path: "https://www.zawya.com/en/press-release/companies-news/city-farm-seeks-to-increase-its-sales-revenue-in-the-usa-market-of-frozen-agricultural-products-manufactured-in-egypt-ay3muuz6",
      text: "Mahmoud Lamei, CEO of City Farm, said that his company actually began its work in supplying products into the American market since 2021, and at that time it achieved annual sales amounting to $28 million, rising to $35 million in 2022, which prompted it to increase its targets for the current year, in light of the remarkable demand for the products.He explained that the company works in the field of exporting Egyptian agricultural products to various American markets, and has a strong presence in the states of New York, New Jersey, Florida, Chicago, Texas, and Michigan.Lamei pointed out that the company supplies several agricultural products to American markets, most notably molokhia, okra, taro, green beans, spinach, falafel, green beans, and grape leaves, in addition to bottled juices and peas.He confirmed that Arab and Egyptian customers represent the largest percentage of sales in the famous commercial chains in the United States, .",
    },
    {
      id: 2,
      link: 2,
      func: handleEx1Article,
      article: ex1,
      name: "The Egyption Gazatte",
      href: "#2",
      image: "/articales/arr1.jpg",
      path: "https://egyptian-gazette.com/business/city-farm-targets-50m-in-sales-of-frozen-agricultural-products-in-american-market/",
      text: "City Farm, an Egyptian company that specializes in exporting frozen vegetables to the US, aims to increase its sales in this market to $50m this year, a 43% growth from $35m in 2022.The company has been operating in the US market since 2021, when it achieved annual sales of $28m, and has seen a remarkable demand for its products. The company’s CEO Mahmoud Lamei said that City Farm exports a range of Egyptian agricultural products to various US states, such as New York, New Jersey, Florida, Chicago, Texas, and Michigan. Some of the products that the company offers are molokhia, okra, taro, spinach, falafel, green beans, grape leaves, bottled juices, and peas. These products are popular among Arab and Egyptian customers, who account for the majority of sales in the well-known commercial chains in the US, as well as some other nationalities who are interested in Egyptian cuisine. Lamei also revealed that the company has an ambitious expansion plan to enter the European and Gulf markets shortly,  ",
    },
    {
      id: 3,
      link: 3,
      func: handleEx2Article,
      article: ex2,
      name: "Deily News Egypt",
      href: "#3",
      image: "/articales/art2.png",
      path: "https://www.dailynewsegypt.com/2023/09/27/city-farm-targets-50m-in-sales-of-frozen-agricultural-products-in-american-market/",
      text: "City Farm, an Egyptian company that specializes in exporting frozen vegetables to the US, aims to increase its sales in this market to $50m this year, a 43% growth from $35m in 2022. The company has been operating in the US market since 2021, when it achieved annual sales of $28m, and has seen a remarkable demand for its products. The company’s CEO Mahmoud Lamei said that City Farm exports a range of Egyptian agricultural products to various US states, such as New York, New Jersey, Florida, Chicago, Texas, and Michigan. Some of the products that the company offers are molokhia, okra, taro, spinach, falafel, green beans, grape leaves, bottled juices, and peas. These products are popular among Arab and Egyptian customers, who account for the majority of sales in the well-known commercial chains in the US, as well as some other nationalities who are interested in Egyptian cuisine. Lamei also revealed that the company has an ambitious expansion plan to enter the European and Gulf markets shortly, ",
    },
    {
      id: 4,
      link: 4,
      func: handleEx3Article,
      article: ex3,
      name: "Fresh Plaza",
      href: "#4",
      image: "/articales/art3.png",
      path: "https://www.freshplaza.com/asia/article/9563216/egypt-s-city-farm-targets-50-mln-in-sales-of-frozen-agricultural-products-in-us-market/",
      text: "City Farm is an Egyptian company that specializes in exporting frozen vegetables to the US. It has stated that it aims to increase its sales in this market to $50 mln this year, a 43% growth from $35 mln in 2022. The company has been operating in the US market since 2021, when it achieved annual sales of $28m, and has seen a remarkable demand for its products. According to CEO Mahmoud Lamei, City Farm exports a range of Egyptian agricultural products to various US states, such as New York, New Jersey, Florida, Chicago, Texas, and Michigan. Some of the products that the company offers are spinach, falafel, green beans, grape leaves, bottled juices and peas. Lamei also made clear that the company has an ambitious expansion plan to enter the European and Gulf markets shortly, leveraging the quality of the Egyptian product and its strong presence in the US market. He added that the company’s total production capacity exported from Egypt is about 1,300 tons per year and that the government is working to increase this amount in line with its policy to boost foreign currency sources.",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div className="news">
      <NavBar />
      <Container>
        <div className="art-header">
          <FaBookAtlas className="art-icon" />
          <h1>City Farm News</h1>
        </div>

        <Carousel responsive={responsive} className="media-data">
          {articales.map((data) => (
            <div className="mediaCard" key={data.id}>
              <a href={data.path}>
                <Card
                  style={{ width: "15rem" }}
                  className="media-cardContanier"
                >
                  <Card.Img variant="top" src={data.image} className="artImg" />
                  <Card.Body className="newsCard-body">
                    <Card.Title>{data.name}</Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </div>
          ))}
        </Carousel>

        <div className="feedingUSA">
          <div className="feedingName">
            <img
              src="/images/feeding america.png"
              alt="logo"
              className="feedingLogo"
            />
          </div>
          <div className="feedingBody">
            <div className="feedingheader">
              <img
                src="/images/charity.png"
                alt="icon"
                className="charityIcon"
              />
              <h1>Feeding America</h1>
            </div>

            <p className="feedingText">
              At City Farm we&aposre committed to more than
              <br /> just great food. We believe in giving back to our community
              and beyond; We are fortunate for being
              <br /> able to contribute in aiding and helping local communities
              by volunteering in the Feeding America charity organization.
            </p>
          </div>
        </div>

        <div className="findus-holder">
          <div className="findus-header">
            <img src="/images/findus.png" alt="findus" className="findusImg" />
          </div>
          <div className="findus">
            <img
              src="/stores/ALNBG36GNFG43BOPFZZTVZOUVA.jpg"
              alt="store"
              className="store"
            />
            <img
              src="/stores/BJ's_Exterior.jpg"
              alt="store"
              className="store"
            />
            <img src="/stores/shoprite.jpg" alt="store" className="store" />
            <img src="/stores/target.jpg" alt="store" className="store" />
            <img src="/stores/walmert.jpg" alt="store" className="store" />
            <img
              src="/stores/wegmans-super-market-store-front-FT-BLOG1017-03ad546319564b81af26b2029867ad9c.jpg"
              alt="store"
              className="store"
            />
          </div>
        </div>
      </Container>
      <UpBtn />
      <Footer />
    </div>
  );
};
export default Media;
