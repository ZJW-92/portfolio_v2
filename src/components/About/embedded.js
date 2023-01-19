import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCplusplus,SiPython, SiC,  SiPycharm  } from "react-icons/si";

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
    </Row>
  );
}

export default embedded;
