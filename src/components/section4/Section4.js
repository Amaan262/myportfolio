import React from "react";
import './section4.css'
function Section4() {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading text-center">Contact me</h1>

        <div className="contact-container">
          <div className="overlay"></div>

          <div className="contact-box">
            <div className="box">
              <a
                href="https://www.linkedin.com/in/ahmadamaan/"
                target="_blank" rel="noreferrer"
              >
                <img src={process.env.PUBLIC_URL+"/images/icons/linkedin.svg"} alt="" />
                <h2 className="text-center">Linkedin Profile</h2>
              </a>
              <p className="text-center">Checkout my Linkedin account</p>
            </div>
            <div className="box">
              <a href="https://www.instagram.com/a_maan_/" rel="noreferrer" target="_blank">
                <img src={process.env.PUBLIC_URL+"/images/icons/insta.svg"} alt="" />
                <h2 className="text-center">Instagram</h2>
              </a>
              <p className="text-center">Checkout my instagram account</p>
            </div>
            <div className="box">
              <a href="https://www.facebook.com/Amaannik"  rel="noreferrer" target="_blank">
                <img src={process.env.PUBLIC_URL+"/images/icons/facebook.svg"} alt="" />
                <h2 className="text-center">Facebook</h2>
              </a>
              <p className="text-center">Checkout my Facebook account</p>
            </div>
          </div>
         
        </div>
      </section>

    </>
  );
}

export default Section4;
