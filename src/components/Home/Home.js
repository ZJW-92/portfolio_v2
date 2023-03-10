import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import '@lottiefiles/lottie-player';



function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading_welcome">
                Welcome To My Portfolio!
              </h1>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                I am Zhijie Wei
              </h1>
              <br/>
              <br/> <br/>
              <h1 className="heading-name">
              I am seeking 
              <strong className="main-name"> a new career as</strong>&nbsp;👇
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
							<lottie-player classNameName='animPlayer' style={{ width: '105%', height: '105%' }}
								autoplay background='transparent' loop speed={1} mode='normal'
								src='https://assets6.lottiefiles.com/packages/lf20_txinanby.json'
							></lottie-player>
					  </Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
