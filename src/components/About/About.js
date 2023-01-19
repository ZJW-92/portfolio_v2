import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Frontend from "./frontend";
import Aboutcard from "./AboutCard";
import '@lottiefiles/lottie-player';

import Backend from "./backend";
import Testing from "./testing";
import Ml from "./machinelearning";
import Embedded from "./embedded";
import Others from "./others";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="project-heading">
           <strong>About Me </strong>
           </h1>
          <Aboutcard />
          </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
						<lottie-player classNameName='animPlayer' style={{ width: '105%', height: '105%' }}
								autoplay background='transparent' loop speed={1} mode='normal'
								src='https://assets7.lottiefiles.com/packages/lf20_M9p23l.json'
						></lottie-player>
					  </Col>


        </Row>
        <Github /> <br/><br/>
        <h1 className="project-heading">
           <strong>Tech Stack </strong>
        </h1>
        <br/>
        <h1 className="project-heading">
          Front-end
        </h1>
        <Frontend />
        <h1 className="project-heading">
          Back-end
        </h1>
        <Backend />
        <h1 className="project-heading">
          Testing
        </h1>
        <Testing />
        <h1 className="project-heading">
         Machine Learning
        </h1>
        <Ml />
        <h1 className="project-heading">
         Embedded
        </h1>
        <Embedded />
        <h1 className="project-heading">
         Others
        </h1>
        <Others/>
      </Container>
    </Container>
  );
}

export default About;
