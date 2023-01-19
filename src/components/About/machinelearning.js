import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython, SiJupyter, SiAnaconda,SiKeras, SiTensorflow , SiPandas,
  SiNumpy, SiTableau } from "react-icons/si";

function machine_learning() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={1} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        < SiAnaconda/>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiKeras />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiTensorflow/>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiPandas/>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiNumpy/>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiTableau/>
      </Col>
    </Row>
  );
}

export default machine_learning;
