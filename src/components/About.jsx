// import React from "react";
 import "./About.css";
import aboutImage from "../assets/about_image.png";
import Navbar from "./Navbar"
const About = () => {
  return (
    <>

     <Navbar/>
      <section className="hero">
        <div className="hero-content">
         
          <img src={aboutImage} alt="Contact" />
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              Forever was born out of a passion for innovation and a desire to
              revolutionize online shopping...
            </p>
          </div>
        </div>
      </section>

      
      <section className="why-choose">
        <h2>WHY CHOOSE US</h2>
        <div className="features">
          <div className="feature-box">
            <h3>Quality Assurance:</h3>
            <p>
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="feature-box">
            <h3>Convenience:</h3>
            <p>
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div className="feature-box">
            <h3>Exceptional Customer Service:</h3>
            <p>
              Our team of dedicated professionals is here to assist you every
              step of the way.
            </p>
          </div>
        </div>
      </section>

     
      <section className="subscribe">
        <h2>Subscribe now & get 20% off</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </section>

     
      <footer>
        <div className="footer-container">
          <div className="about">
            <h3>FOREVER.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>
          </div>
          <div className="footer-links">
            <h3>COMPANY</h3>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>GET IN TOUCH</h3>
            <ul>
              <li>+1-000-000-0000</li>
              <li>greatstackdev@gmail.com</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">
          Copyright 2024 © greatstack.dev - All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default About;