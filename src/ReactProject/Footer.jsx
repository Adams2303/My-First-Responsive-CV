import React from "react";
import { Form, FormControl, FormGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer
      id='contact'
      style={{
        height: "969px",
        padding: "100px",
        backgroundColor: "#0e0e17",
        color: "white",
      }}
    >
      <Container style={{ display: "flex" }}>
        <div style={{ flex: "40%" }}>
          <h4>
            Want to get in touch? <br />
            Go for it
          </h4>
          <p style={{ color: "hsla(0,0%,100%,.8)" }}>
            I am always ready to work whenever the right chance presents itself.
          </p>
          <ul style={{ listStyle: "none", padding: "10px 0 0" }}>
            <li
              style={{ fontSize: "18px", fontWeight: "500", lineHeight: "1.3" }}
            >
              <FontAwesomeIcon
                style={{
                  color: "18A8D8",
                  fontSize: "22px",
                  fontWeight: "600px",
                  textAlign: "center",
                  width: "30px",
                }}
                icon={faMapMarkerAlt}
              />
              <span>123 Main St Anytown, United States Of America 12345.</span>
            </li>
            <li
              style={{ fontSize: "18px", fontWeight: "500", lineHeight: "1.3" }}
            >
              <FontAwesomeIcon
                style={{
                  color: "18A8D8",
                  fontSize: "22px",
                  fontWeight: "600px",
                  textAlign: "center",
                  width: "30px",
                }}
                icon={faEnvelope}
              />
              <span>Adam.sadek@example.com</span>
            </li>
            <li
              style={{ fontSize: "18px", fontWeight: "500", lineHeight: "1.3" }}
            >
              <FontAwesomeIcon
                style={{
                  color: "#18A8D8",
                  fontSize: "22px",
                  fontWeight: "600px",
                  textAlign: "center",
                  width: "30px",
                }}
                icon={faPhone}
              />
              <span>+21261060107</span>
            </li>
          </ul>
        </div>
        <Form style={{ flex: "60%", paddingLeft: "95px" }}>
          <div className='row'>
            <h4>Contact me directly :</h4>
            <div className='col-md-6'>
              <FormGroup className='mb-3'>
                <FormControl
                  className='my-form-control'
                  type='text'
                  placeholder='Full Name'
                />
              </FormGroup>
            </div>
            <div className='col-md-6'>
              <FormGroup className='mb-3'>
                <FormControl
                  className='my-form-control'
                  type='email'
                  placeholder='Email Address'
                />
              </FormGroup>
            </div>
            <div className='col-12'>
              <FormGroup className='mb-3'>
                <FormControl
                  className='my-form-control'
                  type='text'
                  placeholder='Subject'
                />
              </FormGroup>
            </div>
            <div className='col-12'>
              <FormGroup className='mb-3'>
                <FormControl
                  className='my-form-control'
                  rows='4'
                  type='text'
                  placeholder='Text message'
                  style={{ height: "100px" }}
                ></FormControl>
              </FormGroup>
            </div>
            <div className='col-12'>
              <button className='px-btn px-btn-white send'>Send Message</button>
            </div>
          </div>
        </Form>
      </Container>
      <Container>
        <div className='col-12'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.9879397610543!2d-6.839587408542525!3d34.01852051880699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76d4ee9e69ded%3A0x148138a74b343466!2s3w%20Academy!5e0!3m2!1sen!2sma!4v1677521930084!5m2!1sen!2sma'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowfullscreen=''
            loading='lazy'
          ></iframe>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
