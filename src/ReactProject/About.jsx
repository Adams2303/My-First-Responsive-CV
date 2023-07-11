import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faWandMagicSparkles,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";
import CardHeader from "react-bootstrap/esm/CardHeader";
import TestimonialBox from "./TestimonialBox";
import Slider from "react-slick";

const AboutSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <section
      id='biography'
      style={{ backgroundColor: "#0e0e17", padding: "100px 0", color: "white" }}
    >
      <Container>
        <Row className='align-items-center justify-content-center'>
          <Col md={6} lg={4}>
            <div
              className='info'
              style={{
                border: "5px solid cyan",
                borderRadius: "50%",
                margin: "auto",
                maxHeight: "358px",
                maxWidth: "356px",
                overflow: "hidden",
              }}
            >
              <img
                src='https://ddgimgs-f43e.kxcdn.com/1961602/cwqq9m_39ea89a21dae436c5ce4ccfd287ad4045dde19c1.jpg'
                alt='Random Male Face'
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "scale-down",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  listStyle: "none",
                  marginBottom: "0",
                  paddingLeft: "0",
                  justifyContent: "center",
                }}
              >
                <a
                  href='https://facebook.com'
                  style={{
                    border: "2px solid #fff",
                    borderRadius: "50%",
                    height: "35px",
                    lineHeight: "31px",
                    margin: "0 5px",
                    textAlign: "center",
                    width: "35px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size='lg'
                    className='mx-2'
                    color='#fff'
                    backgroundColor='#0b0b13'
                  />
                </a>
                <a href='https://twitter.com'>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size='lg'
                    className='mx-2'
                    color='#fff'
                    backgroundColor='#0b0b13'
                  />
                </a>
                <a href='https://instagram.com'>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size='lg'
                    className='mx-2'
                    color='#fff'
                    backgroundColor='#0b0b13'
                  />
                </a>
                <a href='https://linkedin.com'>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size='lg'
                    className='mx-2'
                    color='#fff'
                    backgroundColor='#0b0b13'
                  />
                </a>
                <a href='https://pinterest.com'>
                  <FontAwesomeIcon
                    icon={faPinterest}
                    size='lg'
                    className='mx-2'
                    color='#fff'
                    backgroundColor='#0b0b13'
                  />
                </a>
              </div>
            </div>
            <p className='text-center mt-4'>Web Development Student</p>
            <h3 className='text-center'>Adam Sadek</h3>
          </Col>
          <Col lg={7} className='ml-auto '>
            <div>
              <h3 className='title'>Biography</h3>
              <div className='bio'>
                <p>
                  Hello, my name is Adam Sadek and I am a web development
                  student. I am passionate about learning new technologies and
                  applying them to create amazing web experiences for users.
                </p>
                <p>
                  I have experience working with HTML, CSS, JavaScript, React,
                  Node.js, and more. I am constantly expanding my skills and
                  knowledge to stay up to date with the latest trends in web
                  development.
                </p>
              </div>
              <div className='row info-list'>
                <div className='col-sm-6'>
                  <ul>
                    <li>
                      <label>Age:</label> <span>22</span>
                    </li>
                    <li>
                      <label>Location:</label> <span>Temara, Morocco</span>
                    </li>
                    <li>
                      <label>Business Email:</label>{" "}
                      <span>sadekadam2303@gmail.com</span>
                    </li>
                    <li>
                      <label>Phone:</label> <span>+212610670107</span>
                    </li>
                  </ul>
                </div>
                <div className='col-sm-6'>
                  <ul>
                    <li>
                      <label>Website:</label> <span>www.adamsadek.com</span>
                    </li>
                    <li>
                      <label>GitHub:</label> <span>Adams2303</span>
                    </li>
                    <li>
                      <label>Freelance:</label> <span>Available</span>
                    </li>
                    <li>
                      <label>Ability to Relocate:</label> <span>Possible</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div
          className='seperated'
          style={{
            backgroundImage:
              "url( 'https://nairo.ibthemespro.com/img/border-dark.png')",
          }}
        ></div>
        <div className='title'>
          <h3>My Specialities</h3>
        </div>
        <Row>
          <Col md={6} lg={4} className='my-3'>
            <Card bg='black' text='white' className='my-card'>
              <CardHeader>
                <FontAwesomeIcon className='icon' icon={faUserGraduate} />
              </CardHeader>
              <Card.Body className='card-body'>
                <Card.Title className='title'> Humanities </Card.Title>
                <Card.Text className='text'>
                  In an increasingly Globalized World, A foundation in
                  humanities furnishes a web developer with the ability to
                  comprehend and effectively communicate with diverse audiences,
                  enhancing user experience and marketability.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className='my-3'>
            <Card bg='black' text='white' className='my-card'>
              <CardHeader>
                <FontAwesomeIcon className='icon' icon={faWandMagicSparkles} />
              </CardHeader>
              <Card.Body className='card-body'>
                <Card.Title className='title'> Web Design</Card.Title>
                <Card.Text className='text'>
                  A comprehensive understanding of web design philosophy
                  empowers a web developer to design visually appealing and
                  user-friendly websites that effectively convey intended
                  messages to the target audience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className='my-3'>
            <Card bg='black' text='white' className='my-card'>
              <CardHeader>
                <FontAwesomeIcon className='icon' icon={faCode} />
              </CardHeader>
              <Card.Body className='card-body'>
                <Card.Title className='title'> Web Development</Card.Title>
                <Card.Text className='text'>
                  In the current digital era, web development is a pivotal
                  discipline that facilitates the creation and dissemination of
                  information, goods, and services via the internet by
                  businesses, organizations, and individuals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div
          className='seperated'
          style={{
            backgroundImage:
              "url( 'https://nairo.ibthemespro.com/img/border-dark.png')",
          }}
        ></div>
        <div className='title'>
          <h3>Testimonials.</h3>
        </div>
        <div className='testimonials-container'>
          <div>
            <h2> Single Item</h2>
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
