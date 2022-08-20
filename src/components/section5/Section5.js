import React from "react";
import "./section5.css";

function Section5() {
  return (
    <>
      <section className="contact-form" id="contact-form">
        <h1 className="heading text-center">Form</h1>

        <div className="container">
          <div className="overlay overlay-4"></div>

          <div className="box-1">
            <form method="POST" action="process.php">
              <p>
                {" "}
                Name*
                <input type="text" name="name" required />
              </p>
              <p>
                {" "}
                Email*
                <input type="email" name="email" required />
              </p>
              <p>
                Subject
                <input type="text" name="subject" />
              </p>
              <p>
                Your Message*
                <textarea
                  name="message"
                  id="message"
                  cols="50"
                  rows="10"
                ></textarea>
              </p>
              <button
                className="btn-3 btn"
                name="submit"
                value="Submit Form"
                type="submit"
              >
                SUBMIT
              </button>
            </form>
            <p className="notice">
              I typically reply to all email inquiries within 24 hours.
            </p>
          </div>

          <div className="box-2">
            <div className="address">
              <p>
                {" "}
                <img src={process.env.PUBLIC_URL+"images/icons/mail.svg"} alt="" /> &nbsp;
                amaansaifi262@gmail.com
              </p>
              <p>
                {" "}
                <img src={process.env.PUBLIC_URL+"images/icons/location.svg"} alt="" /> &nbsp; Rudrapur,
                Uttarakhand
              </p>

              <iframe title="myframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55839.53259071463!2d79.36053443542977!3d28.988236663218014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a07f9567c1f745%3A0xdffe5c8738783baf!2sRudrapur%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1630401422820!5m2!1sen!2sin"
                style={{ border: "0" }}
                allowFullScreen="0"
                loading="lazy"
                ></iframe>
         
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Section5;
