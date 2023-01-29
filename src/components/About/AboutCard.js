import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <p className="home-about-body">
          <p style={{ textAlign: "justify" }}>
          ⭑  I have genuine passion for&nbsp;
          <strong className="main-name">Software Engineering and User Requirements. </strong>
          Also, I am interested with Consulting, Cyber Security, Quality Assurance, Test Automation, DevOps, Data Science and Machine Learning.
          <br /><br />      
          ⭑ I am careful, resistant to stress, self-motivated with a&nbsp;
          <strong className="main-name">strong </strong>
          desire to keep learning and like to communicate and share ideas.<br/><br/>
          ⭑ I am active, like to cooperate in&nbsp;
          <strong className="main-name">teamwork </strong>
          and open to new ideas and willing to listen to advice. <br/><br/>
          ⭑ My biggest advantages are my competence and&nbsp;
         <strong className="main-name">positive </strong>
        attitude.<br/><br/>
         </p>
        </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
