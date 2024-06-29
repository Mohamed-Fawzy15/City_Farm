import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";
import "./CategroiesStyle.css";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import UpBtn from "../UpBtn/UpBtn";

const Categroies = () => {
  const navigate = useNavigate();

  const loadData = (id) => {
    navigate(`/categroies/${id}`);
  };

  const rightText = useSpring({
    from: { x: -10000 },
    to: { x: 0 },
    delay: 700,
  });
  const leftText = useSpring({
    from: { x: -10000 },
    to: { x: 0 },
    delay: 700,
  });

  // const handleCompanyClick = (id, arr) => {
  //   navigate(`/categroies/${id}`);
  //   arr = frozen;
  // };

  return (
    <div className="categories-page">
      <NavBar />
      <Container>
        <div className="categroiesHolder">
          <div className="categroiesImg">
            {/* <img src={image} alt="Frozen Food" /> */}
            <motion.img
              src="/images/frozen/frozen.webp"
              alt="issse"
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.7,
              }}
            />
          </div>
          <animated.div className="categroiesText" style={rightText}>
            <h1>Frozen</h1>
            <button className="categroiesBtn" onClick={() => loadData(1)}>
              Discover
            </button>
          </animated.div>
        </div>
        <hr />
        <div className="categroiesHolder">
          <animated.div className="categroiesText" style={leftText}>
            <h1>Juices</h1>
            <button className="categroiesBtn" onClick={() => loadData(2)}>
              Discover
            </button>
          </animated.div>
          <div className="categroiesImg">
            {/* <img src={image} alt="Frozen Food" /> */}
            <motion.img
              src="/images/Jucies/juice.webp"
              alt="issse"
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.7,
              }}
            />
          </div>
        </div>
        <hr />
        <div className="categroiesHolder">
          <div className="categroiesImg">
            {/* <img src={image} alt="Frozen Food" /> */}
            <motion.img
              src="/images/beans/beans.webp"
              alt="issse"
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.7,
              }}
            />
          </div>
          <animated.div className="categroiesText" style={rightText}>
            <h1>Canned Items</h1>
            <button className="categroiesBtn" onClick={() => loadData(3)}>
              Discover
            </button>
          </animated.div>
        </div>
        <hr />
        <div className="categroiesHolder">
          <animated.div className="categroiesText" style={leftText}>
            <h1>Spices</h1>
            <button className="categroiesBtn" onClick={() => loadData(4)}>
              Discover
            </button>
          </animated.div>
          <div className="categroiesImg">
            {/* <img src={image} alt="Frozen Food" /> */}
            <motion.img
              src="/images/spices/spiecs.webp"
              alt="issse"
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.7,
              }}
            />
          </div>
        </div>
        <hr />
        <div className="categroiesHolder">
          <div className="categroiesImg">
            {/* <img src={image} alt="Frozen Food" /> */}
            <motion.img
              src="/images/pickles/pickles.webp"
              alt="issse"
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.7,
              }}
            />
          </div>
          <animated.div className="categroiesText" style={rightText}>
            <h1>Pickles</h1>
            <button className="categroiesBtn" onClick={() => loadData(5)}>
              Discover
            </button>
          </animated.div>
        </div>
        <hr />
        <div className="categroiesHolder">
          <animated.div className="categroiesText" style={leftText}>
            <h1>Snacks</h1>
            <button className="categroiesBtn" onClick={() => loadData(6)}>
              Discover
            </button>
          </animated.div>
          <div className="categroiesImg">
            {/* <img src={image} alt="Frozen Food" /> */}
            <motion.img
              src="/images/snacks/snacks.webp"
              alt="issse"
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.7,
              }}
            />
          </div>
        </div>
      </Container>
      <UpBtn />
      <Footer />
    </div>
  );
};

export default Categroies;
