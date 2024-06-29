import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./AboutStyle.css";
import aboutImg from "./cover.jpeg";
import { Container } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web";
// import aboutLogo from "./logo.png";
import SFA from "./sfa.png";
import USDA from "./USDA.png";
import UImg from "./u.png";
import ISO22000 from "./iso 22000.png";
import ISO9001 from "./iso 9001.png";
import FDA from "./FDA.png";
// import { motion, useInView, useAnimation } from "framer-motion";
import UpBtn from "../UpBtn/UpBtn";

const About = () => {
  const fade = useSpring({
    from: { x: 10000 },
    to: { x: 0 },
    delay: 1000,
  });

  const comeFromTop = useSpring({
    from: { y: -10000 },
    to: { y: 0 },
    delay: 1000,
  });

  const certificateImg1 = useSpring({
    from: { x: -10000 },
    to: { x: 0 },
    delay: 1000,
  });

  const certificateImg2 = useSpring({
    from: { x: -10000 },
    to: { x: 0 },
    delay: 1500,
  });

  const certificateImg3 = useSpring({
    from: { x: -10000 },
    to: { x: 0 },
    delay: 2000,
  });
  const certificateImg4 = useSpring({
    from: { x: -10000 },
    to: { x: 0 },
    delay: 2500,
  });
  const certificateImg5 = useSpring({
    from: { x: -10000 },
    to: { x: 0 },
    delay: 3000,
  });
  const certificateImg6 = useSpring({
    from: { x: -10000 },
    to: { x: 0 },
    delay: 3500,
  });

  return (
    <div className="aboutUs-page">
      <NavBar />
      <Container>
        <div className="aboutUsHolder">
          <div className="firstSection">
            <div className="aboutImg">
              <img src={aboutImg} alt="Who We Are" />
            </div>
          </div>

          <div className="aboutus">
            <div className="firstRow">
              <div className="secondSection">
                <h1 className="aboutUs-header">
                  <span>About</span> Us
                </h1>
                <animated.p className="aboutText" style={comeFromTop}>
                  The establishment of CityFarm, <br />a family business that is
                  being passed down from father to son,
                  <br /> began in 1964 with the help of an outstanding team of
                  industry professionals
                  <br /> with extensive experience in Spices, Juices, frozen
                  food and vegetable processing. In order to <br />
                  serve our extended family, which is you, the consumer with the
                  highest quality of ingredients, we chose the rich soil of
                  Egypt to construct our vision. Year after year, City Farm
                  markets span across Canada, United States of America, Mexico,
                  Europe, England, Australia and the Middle East.
                </animated.p>
              </div>

              <div className="forthSection">
                <h1 className="aboutUs-header">
                  <span>Our</span> Mission
                </h1>
                <p className="aboutText">
                  Having a professional & passionate team of foodies who share a
                  love for cooking and a commitment to quality we are dedicated
                  to making your dining experience one to remember.
                </p>
                <p className="aboutText">
                  In aims to do so we will continue to provide you with the
                  highest quality of food that not only tastes outstanding but
                  is also affordable, convenient and full of nutritions that
                  will nourish your soul and body.
                </p>
              </div>
            </div>
            <div className="secondRow">
              <div className="thirdSection">
                <h1 className="aboutUs-header">
                  <span>Food safety </span>and Regulations in City Farm
                </h1>
                <div className="founder">
                  <animated.p className="founderText" style={fade}>
                    Food and Beverage goods must adhere to certain
                    <br /> standards; because of this at City Farm we abide by
                    very strict hygienic laws <br />
                    and guidelines to guarantee food safety and dependability
                    while preserving productivity.
                  </animated.p>
                  <animated.p className="founderText founder2" style={fade}>
                    In order to ensure that all our Food products do fulfill the
                    necessary standards for the American market, we comply with
                    all FDA laws.
                  </animated.p>
                </div>
              </div>
            </div>
          </div>

          <div className="fifthSection" id="certifctionSection">
            <animated.img
              src={FDA}
              alt="FDA"
              className="certificateImg"
              style={certificateImg1}
            />
            <animated.img
              src={ISO9001}
              alt="ISO 9001:2015"
              className="certificateImg"
              style={certificateImg2}
            />
            <animated.img
              src={ISO22000}
              alt="ISO 22000"
              className="certificateImg"
              style={certificateImg3}
            />
            <animated.img
              src={UImg}
              alt="U"
              className="certificateImg"
              style={certificateImg4}
            />
            <animated.img
              src={USDA}
              alt="USDA Organic"
              className="certificateImg"
              style={certificateImg5}
            />
            <animated.img
              src={SFA}
              alt="SFA"
              className="certificateImg"
              style={certificateImg6}
            />
          </div>
        </div>
      </Container>
      <UpBtn />
      <Footer />
    </div>
  );
};

export default About;
