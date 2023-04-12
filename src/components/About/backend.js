import React from "react";
import { Col, Row } from "react-bootstrap";
import {SiExpress} from "react-icons/si";

import {DiNodejs,DiMongodb, DiNpm,DiDjango, } from "react-icons/di"
 


function backend() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={1} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiNpm />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiDjango/>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiMongodb/>
      </Col>
    </Row>
  );
}

export default backend;
