import React from "react";
import { Col, Row } from "react-bootstrap";
import {FaGit} from "react-icons/fa";
import {SiVmware, SiLinux,SiVisualstudiocode} from 'react-icons/si';

function others() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={1} className="tech-icons">
        <FaGit  />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiVmware/>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        < SiLinux/>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        < SiVisualstudiocode/>
      </Col>
    </Row>
  );
}

export default others;
