import React from "react";
import { Col, Row } from "react-bootstrap";

import {AiFillHtml5} from 'react-icons/ai';

import {DiCss3, DiJavascript1, DiReact, DiBootstrap } from 'react-icons/di';

import {TbBrandNextjs} from 'react-icons/tb';

import { SiMaterialui, SiTailwindcss, SiStyledcomponents, 
  SiVite} from "react-icons/si";


  function frontend() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={1} className="tech-icons">
      <AiFillHtml5 />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
      <DiCss3 />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
      <DiJavascript1 />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
      <DiReact />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
      <DiBootstrap />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
      <TbBrandNextjs />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiMaterialui />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiTailwindcss/>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiStyledcomponents />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiVite />
      </Col>
      
     
    </Row>
  );
}

export default frontend;
