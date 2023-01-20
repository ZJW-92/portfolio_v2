import React from "react";
import { Col, Row } from "react-bootstrap";
import {FaGit} from "react-icons/fa";
import {SiVisualstudiocode} from 'react-icons/si';
import {BsFillTerminalFill} from 'react-icons/bs'

function others() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={1} className="tech-icons">
        <FaGit  />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <BsFillTerminalFill/>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        < SiVisualstudiocode/>
      </Col>
    </Row>
  );
}

export default others;
