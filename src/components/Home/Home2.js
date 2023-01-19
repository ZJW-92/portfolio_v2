import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import '@lottiefiles/lottie-player';
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from 'react-icons/si';
import { FaLinkedinIn } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="project-heading">
           <strong>My Background </strong>
           </h1>
           <p className="home-about-body">
            ⭑ Born and studied in&nbsp;
            <strong className="main-name">Shanghai (上海)</strong>
            , China🇨🇳 and&nbsp;
             <strong className="main-name">Gothenburg</strong>
            , Sweden🇸🇪.
              <br /> 
              <br />
              ⭑ I am a&nbsp;
              <strong className="main-name">Software Engineering and Management graduate </strong>
              with&nbsp;
              <strong className="main-name">5+ </strong>
              courses pass with distinction at University of Gothenburg in 2022.
              <br />
              <br />
              Before this education, <br /> <br />
              ⭑ I have finished SFI,&nbsp;
              <strong className="main-name">Svenska som andraspråk 1,2 </strong>
              at Hermods AB in 2020.
              <br />
              <br />
              ⭑ I had master degree of&nbsp;
              <strong className="main-name">Industrial Economics </strong>
              at Shanghai University of Science and Technology in 2017.
              <br />
              <br />
              ⭑ I had one year exchange study at&nbsp;
              <strong className="main-name">Högskolan i Borås </strong>
              in 2016.
              <br />
              <br />
            </p>
          </Col> 
          
              <Col md={4} style={{ paddingBottom: 20 }}>
							<lottie-player classNameName='animPlayer' style={{ width: '115%', height: '115%' }}
								autoplay background='transparent' loop speed={1} mode='normal'
                src='https://assets7.lottiefiles.com/private_files/lf30_WdTEui.json'
							></lottie-player>
					  </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>GET IN TOUCH</h1>
       
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ZJW-92"
                 
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:zjwei0201@gmail.com"
                  
                  className="icon-colour  home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zhijie-wei-858895219/"
                
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
