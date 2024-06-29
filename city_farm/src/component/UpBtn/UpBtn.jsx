import "./UpBtnStyle.css"; // Import CSS file for styling
import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const UpBtn = () => {
  const [upBtn, setUpBtn] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling behavior
    });
  };
  const upTbnDisplay = () => {
    if (window.scrollY >= 80) {
      setUpBtn(true);
    } else {
      setUpBtn(false);
    }
  };

  window.addEventListener("scroll", upTbnDisplay);

  return (
    // <button
    //   className={upBtn ? "scroll-to-top-button" : "onScrollBtn"}
    //   onClick={scrollToTop}
    // >

    // </button>
    <FaArrowCircleUp
      className={upBtn ? "scroll-to-top-button upbtn-icon" : "onScrollBtn"}
      onClick={scrollToTop}
    />
  );
};

export default UpBtn;
