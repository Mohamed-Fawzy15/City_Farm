import { useRef } from "react";
import "./ContactStyle.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import UpBtn from "../UpBtn/UpBtn";
import { Container } from "react-bootstrap";
import hoursImg from "./Hours.png";
import emailjs from "@emailjs/browser";
import video from "./newoction.mp4";

const ContactUs = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current instanceof HTMLFormElement) {
      const formData = new FormData(form.current);
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      emailjs
        .sendForm(
          "service_tiuc9eq",
          "template_w4dq3wt",
          form.current,
          "NFHeCVJuN2siad52i"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Message sent successfully!");
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("An error occurred while sending the message.");
          }
        );
    } else {
      console.error("form.current is not an instance of HTMLFormElement");
    }
  };

  return (
    <div className="contact-page">
      <NavBar />
      <Container>
        <div className="contactMessage">
          <div className="getInTouch">
            <h1>Get In Touch</h1>
            <p>
              Have a question about our delicious offerings or need assistance
              with your order? We&aposre here to help make your culinary
              experience extraordinary! Get in touch with us via phone at or
              shoot us an email. Your satisfaction is our priority, so let&aposs
              chat and elevate your next meal together!
            </p>
          </div>
          <div className="contactForm">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" required />
              <label>Email</label>
              <input type="email" name="user_email" required />
              <label>Message</label>
              <textarea name="message" required />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
        <div className="workingHours">
          <div className="office">
            <img src="/contact us.png" alt="info" className="infoImg" />
          </div>
          <img src={hoursImg} alt="Working Hours" className="workingHoursImg" />
        </div>
        <div className="LocationVideo">
          <video src={video} autoPlay muted />
        </div>
      </Container>
      <UpBtn />
      <Footer />
    </div>
  );
};

export default ContactUs;
