// import React from "react";
import "./Contact.css";
import contactImage from "../assets/contactpage.png";
import Navbar from "./Navbar";
const ContactPage = () => {
  return (

    <>
    <Navbar />
      <div>
        <div id="whole">
          <div>
            <div id="con">
              <p id="contact">
             
              </p>
            </div>
            <div>
              <img src={contactImage} alt="Contact" />
              <div>
                <p id="ou">Our Store</p>
                <p>
                  54709 Willms Station
                  <br />
                  Suite 350, Washington, USA
                </p>
                <p>
                  Tel: (415) 555-0132
                  <br />
                  Email: admin@forever.com
                </p>
                <p id="careers">Careers at Forever</p>
                <p id="learn">Learn more about our teams and job openings</p>
                <button id="b">Explore Jobs</button>
              </div>
            </div>
            <div id="sub">
              <p id="sub">Subscribe now & get 20% off</p>
              <p id="lorem">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </p>
              <form>
                <input type="email" placeholder="Enter your email" />
                <button className="sub">SUBSCRIBE</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div>
              {/* <img src="forever.png" alt="Forever" className="img2" /> */}
              <p className="lorem">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </p>
            </div>
            <div className="type1">
              <p className="get">COMPANY</p>
              <ul className="li1">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className="type2">
              <p className="get">GET IN TOUCH</p>
              <ul className="li1">
                <li>+1-000-000-0000</li>
                <li>greatstackdev@gmail.com</li>
                <li className="pointer">Instagram</li>
              </ul>
            </div>
          </div>
          <div>
            <hr />
            <p className="copyright">
              Copyright 2024@ greatstack.dev - All Rights Reserved.
            </p>
          </div>
        </div>

      </div>

    </>
  );
};

export default ContactPage;