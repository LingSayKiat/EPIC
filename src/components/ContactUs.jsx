import React from "react";
import { motion } from "framer-motion";
import "./ContactUs.css";

function GoogleForm() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 1.2 }}
      variants={variants}
      className="contact-us-section"
    >
      <div className="google-form-container">
        <h1 className="google-form-header">Free Trial SignUp</h1>
        <iframe
          title="Google Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeL1GKlXBARI7Eyaa7DVYoRSjc6k3ouNY0TVB2xcnkII38Gnw/viewform?embedded=true"
        ></iframe>
      </div>
    </motion.div>
  );
}

function ContactUs() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      variants={variants}
      className="contact-us-section"
    >
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="address">
            <h3 className="outlet-name">Toa Payoh Branch</h3>
            <p>
              Blk 178 Toa Payoh Central
              <br />
              #02-210 Singapore 310178
            </p>
            <h3 className="outlet-name">Hougang Branch</h3>
            <p>
              Blk 534 Hougang Street 52
              <br />
              #B1-32 Singapore 530534
            </p>
          </div>
          <div className="social-media">
            <h2 className="follow-us-header">Follow us on social media!</h2>
            <div className="social-media-icons">
              <a href="https://www.facebook.com/epicmindsg">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/epicmindsg/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@epicmindsg">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://t.me/epicmindsgmath">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a
                href="https://wa.me/+6584444550"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/ContactUs/whatsapp-qr-code.webp`}
                  alt="QR Code"
                  className="qr-code"
                />
              </a>
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
    </motion.div>
  );
}

function ContactUsPage() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={variants}
      className="contact-us-page"
    >
      <GoogleForm />
      <div className="contact-us-main-container">
        <ContactUs />
      </div>
    </motion.div>
  );
}

export { GoogleForm, ContactUs, ContactUsPage };
