import React from "react";
import "./ContactUs.css"; // Your CSS file to style the layout

function ContactUs() {
  return (
    <div className="contact-us-section">
      <div className="contact-header">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="address">
            <h3>Toa Payoh Branch</h3>
            <p>
              Blk 178 Toa Payoh Central
              <br />
              #02-210 Singapore 310178
            </p>
            <h3>Hougang Branch</h3>
            <p>
              Blk 534 Hougang Street 52
              <br />
              #B1-32 Singapore 530534
            </p>
          </div>
          <div className="social-media">
            <div className="social-media-icons">
              <a
                href="https://www.facebook.com/epicmindsg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/epicmindsg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <img
                src="/images/whatsapp-qr-code.webp"
                alt="QR Code"
                className="qr-code"
              />
            </div>
          </div>
          <p className="phone-email">
            Telephone: 8444 4550
            <br />
            Email: theepicmindlearningloft@gmail.com
          </p>
        </div>
        <div className="maps-container">
          <iframe
            title="Toa Payoh Branch Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818168108528!2d103.8492063153652!3d1.333573899048888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17669d2062c7%3A0x36301e9bbd0a00ac!2sThe%20Epic%20Mind%20Learning%20Loft%20(Toa%20Payoh)!5e0!3m2!1sen!2ssg!4v1654695941931!5m2!1sen!2ssg"
          ></iframe>
          <iframe
            title="Hougang Branch Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1814.4629304864434!2d103.88918595561017!3d1.3773122649583065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1647456e6a5d%3A0x5997add9329b400b!2sThe%20Epic%20Mind%20Learning%20Loft%20(Hg)!5e0!3m2!1sen!2ssg!4v1708878835464!5m2!1sen!2ssg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
