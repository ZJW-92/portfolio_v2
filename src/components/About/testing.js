import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiRobotframework, SiJenkins, SiSelenium, SiGitlab, SiPostman} from "react-icons/si";

function testing() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={1} className="tech-icons">
        <SiRobotframework />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiJenkins />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiSelenium />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiGitlab />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiPostman/>
      </Col>
    </Row>
  );
}

export default testing;
