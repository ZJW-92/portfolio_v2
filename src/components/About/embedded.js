import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCplusplus,SiPython, SiC,  SiPycharm, SiUbuntu  } from "react-icons/si";
import {ImEmbed2} from 'react-icons/im'
import {SiVmware, SiLinux} from 'react-icons/si';


function embedded() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={1} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiCplusplus/>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        < SiPython/>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        < SiPycharm/>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiVmware/>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        < SiLinux/>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiUbuntu/>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <ImEmbed2/>
      </Col>
    </Row>
  );
}

export default embedded;
