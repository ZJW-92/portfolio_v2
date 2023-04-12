import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blockchain from "../../Assets/Projects/13.png";
import emotion from "../../Assets/Projects/14.png"
import chatgpt from "../../Assets/Projects/11.png";

import selfdriving from "../../Assets/Projects/9.png";
import neurodrive from "../../Assets/Projects/3.png";
import keepfit from "../../Assets/Projects/6.png";
import bigdata from "../../Assets/Projects/10.png";
import portfolio from "../../Assets/Projects/5.png";
import portfolio_2 from "../../Assets/Projects/12.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong>Recent Projects </strong>
        </h1>
     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
     <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Facial Emotion Detection"
              description="A task of recognizing a person's emotional state among angry, disgust, fear, happy, neutral, sad and surprise using CNN deep learning technology."
              tags="Keras, Tensorflow, OpenCV, CNN"
              ghLink="https://github.com/ZJW-92/facial_emotion_detection"
              demoLink="https://github.com/ZJW-92/facial_emotion_detection/blob/main/README.md#visualization"    
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchain}
              isBlog={false}
              title="Web3 Blockchain Social Media App"
              description="A decentralized social media application that you have your account but not privately owned but rather your account is saved in the public blockchain away from private ownership."
              tags="React.js, Lens Protocol, Chakra UI, Ethers, graphQL"
              ghLink="https://github.com/ZJW-92/web3_blockchain_app"
              demoLink="https://blockchain-social-media.netlify.app/"    
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatgpt}
              isBlog={false}
              title="ChatGPT OpenAI"
              description="A language model chatbot developed by OpenAI based on GPT 3.5. Users can interact with bot, require chatbot to write, debug code and explain almost everything."
              tags="Node.js, OpenAIApi, CSS, Vite, JavaScript, Vercel"
              ghLink='https://github.com/ZJW-92/chatgpt_openai'
              demoLink='https://chatgpt-openai.vercel.app/' 
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={selfdriving }
              isBlog={false}
              title="Virtual Self-driving Vehicle "
              description="A microservice that performs object detection for a virtual self-driving vehicle turning the steering wheel angle to avoid obstacles in front of it."
              tags="C++, Git, VMware Fusion, Ubuntu, Docker, OpenCV"
              ghLink="https://github.com/ZJW-92/DIT638-Cyber-Physical-Systems-and-Systems-of-Systems"
              // demoLink="https://github.com/ZJW-92/DIT638-Cyber-Physical-Systems-and-Systems-of-Systems" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neurodrive}
              isBlog={false}
              title="NeuroDrive Smart Car"
              description="A software that allows end users to remotely control a smart car with the use of an EEG-headset and a mobile app. Moreover, the smart car can avoid obstacles in front and behind it by turning in the opposite direction."
              tags="C++, Git, Java, Travis CI, Arduino, SmartCar shield"
              ghLink="https://github.com/ZJW-92/DIT112-V20-Miniprojekt-Systemutveckling/blob/main/README.md"
              demoLink="https://www.youtube.com/watch?v=pvArIKRuUSM"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keepfit}
              isBlog={false}
              title="Keep Fit fitness application"
              description="A fitness training application that help you browse and workout 1000+ exercises and more."
              tags="React.js, React-icons, material-UI, Rapid API"
              ghLink="https://github.com/ZJW-92/keep_fit_fitness_app"
              demoLink="https://keepfit-fitness.netlify.app/"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bigdata }
              isBlog={false}
              title="Big data COVID-19 analysis "
              description="Big data analysis of COVID-19 epidemic worldwide through daily data which ranged from January 2020 to March 2021 from Johns Hopkins University. It visualizes how much and fast this epidemic spreads around the world."
              tags="Jupyter notebook, pandas, pyecharts"
              ghLink="https://github.com/ZJW-92/bigData_COVID_Analysis"
              demoLink="https://github.com/ZJW-92/bigData_COVID_Analysis/blob/main/README.md#visualization"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio }
              isBlog={false}
              title="Portfolio Website Version 1  "
              description="First version of my portfolio of introducing myself, my background, projects and technologies I have used in the past year 2022 and 2023."
              tags="React.js, Next.js, React-icons, Styled components"
              ghLink="https://github.com/ZJW-92/personal_portfolio"
              demoLink="https://zhijiewei.netlify.app/"    
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio_2 }
              isBlog={false}
              title="Portfolio Website Version 2 "
              description="Second version of my portfolio of introducing myself, my background, projects and technologies I have used in the past year 2022 and 2023 currently."
              tags="React.js, React-icons, React-bootstrap, LottieFiles "
              ghLink="https://github.com/ZJW-92/portfolio_v2"
              demoLink="https://zhijiewei.vercel.app/"    
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
