import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import { SiGmail } from 'react-icons/si';
import { FaLinkedinIn } from "react-icons/fa";
import { GiDwarfFace } from 'react-icons/gi';


function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"> 
          <h3> <GiDwarfFace size= "2rem" />Designed and Developed by Zhijie Wei</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} All Rights Reserved.</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/ZJW-92" style={{ color: "silver" }}>
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a href="mailto:zjwei0201@gmail.com" style={{ color: "silver" }}>
              <SiGmail />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.linkedin.com/in/soumyajit4419/" style={{ color: "silver" }}>
             <FaLinkedinIn />
            </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
