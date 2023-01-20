import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatgpt from "../../Assets/Projects/11.png";
import recipeblog from "../../Assets/Projects/8.png";
import mern from "../../Assets/Projects/1.png";
import robot from "../../Assets/Projects/2.png";
import selfdriving from "../../Assets/Projects/9.png";
import neurodrive from "../../Assets/Projects/3.png";
import keepfit from "../../Assets/Projects/6.png";
import modernapp from "../../Assets/Projects/7.png";
import kitchen from "../../Assets/Projects/0.png";
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
              imgPath={recipeblog}
              isBlog={false}
              title="Optimal Recipe Blog"
              description="A Content Management System (CMS) of showcasing different kinds of Asian cuisine with full markdown recipes, author information and comments."
              tags="React.js, Next.js, GraphQL, TailwindCSS, Vercel"
              ghLink="https://github.com/ZJW-92/cms_blog_app"
              demoLink="https://optimal-recipe-blog.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mern}
              isBlog={false}
              title="Full-stack MERN project"
              description="A fullstack MERN application combined with Mongodb, ExpressJS, React and Node.js application to post a memory, edit, delete and count Likes."
              tags="Mongodb, Express, React, Node.js"
              ghLink="https://github.com/ZJW-92/FullStack_project"
              demoLink="https://memories-fullstackapp.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robot}
              isBlog={false}
              title="Robot Framework Automation exercise"
              description="Basic web automation testing using Selenium Library and Python. It includes test cases, mouse actions, buttons and connects with Jenkins to implement basic pipeline script. "
              tags="Robot Framework, Pycharm, Jenkins, Selenium"
              ghLink="https://github.com/ZJW-92/RobotFramework_exercise"
              // demoLink="https://github.com/ZJW-92/RobotFramework_exercise"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={selfdriving }
              isBlog={false}
              title="Virtual Self-driving Vehicle "
              description="A microservice that performs object detection for a virtual self-driving vehicle turning the steering wheel angle to avoid obstacles in front of it."
              tags="C++, Git, VMware, Docker, OpenCV"
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
              tags="C++, Java, Travis CI, Arduino, SmartCar shield"
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
              imgPath={modernapp}
              isBlog={false}
              title="ModernApp application"
              description="ModernApp is a full-fledged, cool-designed landing page of showcasing one software company's webpage."
              tags="Figma, React.js, React-bootstrap, Styled-components"
              ghLink="https://github.com/ZJW-92/modernApp"
              demoLink="https://modern-mobile-app.netlify.app/"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kitchen}
              isBlog={false}
              title="Shanghai kitchen UI/UX application"
              description="A modern and fully responsive UI/UX restaurant menu application with react-icons and CSS."
              tags="Figma, React, React-icons, CSS"
              ghLink="https://github.com/ZJW-92/Gourment_Shanghai_kitchen"
              demoLink="https://shanghai-kitchen.netlify.app/"    
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
              // demoLink="https://github.com/ZJW-92/bigData_COVID_Analysis"    
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
