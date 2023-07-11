import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section
      id='experience'
      style={{ backgroundColor: "#010101", padding: "100px 0", color: "white" }}
    >
      <Container>
        <div className='title'>
          <h3>Experience.</h3>
        </div>
        <div className='resume'>
          <div className='resume-row '>
            <Row className='row'>
              <Col md={4} xl={3}>
                <div className='resume-minibox1'>
                  <h6>Lorem ipsum dolor sit.</h6>
                  <label>Lorem, ipsum.</label>
                  <p>Feb 2021 - Present</p>
                  <div className='work-type'> Full Time</div>
                </div>
              </Col>
              <Col md={8} xl={9}>
                <div className='resumer-minibox2'>
                  <h6>Lorem Ipsum LLC</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus ab sunt laudantium molestiae consectetur, autem
                    fugit aspernatur inventore totam ipsam rem accusantium iste
                    dolorum. Sapiente a blanditiis vitae facere perspiciatis!
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className='resume-row'>
            <Row>
              <Col md={4} xl={3}>
                <div className='resume-minibox1'>
                  <h6>Lorem ipsum dolor sit.</h6>
                  <label>Lorem, ipsum.</label>
                  <p>Feb 2021 - Present</p>
                  <div className='work-type'> Part Time</div>
                </div>
              </Col>
              <Col md={8} xl={9}>
                <div className='resumer-minibox2'>
                  <h6>Lorem Ipsum LLC</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus ab sunt laudantium molestiae consectetur, autem
                    fugit aspernatur inventore totam ipsam rem accusantium iste
                    dolorum. Sapiente a blanditiis vitae facere perspiciatis!
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className='resume-row'>
            <Row>
              <Col md={4} xl={3}>
                <div className='resume-minibox1'>
                  <h6>Lorem ipsum dolor sit.</h6>
                  <label>Lorem, ipsum.</label>
                  <p>Feb 2021 - Present</p>
                  <div className='work-type'> Full Time</div>
                </div>
              </Col>
              <Col md={8} xl={9}>
                <div className='resumer-minibox2'>
                  <h6>Lorem Ipsum LLC</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus ab sunt laudantium molestiae consectetur, autem
                    fugit aspernatur inventore totam ipsam rem accusantium iste
                    dolorum. Sapiente a blanditiis vitae facere perspiciatis!
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div
          className='seperated'
          style={{
            backgroundImage:
              "url( 'https://nairo.ibthemespro.com/img/border-dark.png')",
          }}
        ></div>
        <div className='title'>
          <h3> Education & Proficencies</h3>
        </div>
        <Row className='align-items-center'>
          <Col lg={4} className='m-15px-tb'>
            <ul className='education'>
              <li>
                <span>2019 - 2021</span>
                <h6> Associate Degree in English</h6>
                <p> UM5 - FLSHR </p>
              </li>
              <li>
                <span>2021 - 2022</span>
                <h6> B2 proficiency in German </h6>
                <p> Rabat International Academy </p>
              </li>
              <li>
                <span>2022 - Present</span>
                <h6> Licentiate degree in Cultural Studies. </h6>
                <p> UM5 - FLSHR </p>
              </li>
            </ul>
          </Col>
          <Col lg={7} className='ml-auto m-15px-tb'>
            <div className='skill-box'>
              <div className='skill'>
                <h6>HTML5/CSS</h6>
                <span className='count-inner'>
                  <span style={{ color: "hsla(0,0%,100%,.8" }}>94</span>%
                </span>
                <div className='skill-bar'>
                  <div style={{ width: "94%" }}></div>
                </div>
              </div>
              <div className='skill'>
                <h6>JavaScript</h6>
                <span className='count-inner'>
                  <span style={{ color: "hsla(0,0%,100%,.8" }}>75</span>%
                </span>
                <div className='skill-bar'>
                  <div style={{ width: "75%" }}></div>
                </div>
              </div>
              <div className='skill'>
                <h6>ReactJS</h6>
                <span className='count-inner'>
                  <span style={{ color: "hsla(0,0%,100%,.8" }}>80</span>%
                </span>
                <div className='skill-bar'>
                  <div style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className='skill'>
                <h6>UI/UX Design</h6>
                <span className='count-inner'>
                  <span style={{ color: "hsla(0,0%,100%,.8" }}>70</span>%
                </span>
                <div className='skill-bar'>
                  <div style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
