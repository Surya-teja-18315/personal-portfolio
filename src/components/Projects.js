import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/aiml.JPG";
import projImg2 from "../assets/img/quiz.webp";
import projImg3 from "../assets/img/port.JPG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projectCategories = [
    {
      eventKey: "first",
      title: "AI/ML",
      projects: [
        {
          title: "Impact of pollutants on temperature change and forecasting temperature of US cities",
          description: "Developed an AI model to predict temperature changes.",
          imgUrl: projImg1,
          fullDescription: "This project involved creating a machine learning model using TensorFlow to predict temperature changes. The project achieved a 15% cost reduction and a 20% efficiency boost."
        }
      ]
    },
    {
      eventKey: "second",
      title: "Quiz App",
      projects: [
        {
          title: "Quiz Application",
          description: "Interactive quiz app for students.",
          imgUrl: projImg2,
          fullDescription: "Built a quiz application using React.js and Firebase. The app features real-time scoring, a leaderboard, and supports multiple quiz categories."
        }
      ]
    },
    {
      eventKey: "third",
      title: "Portfolio",
      projects: [
        {
          title: "Portfolio Website",
          description: "Personal portfolio to showcase projects.",
          imgUrl: projImg3,
          fullDescription: "Designed and developed a personal portfolio using React.js and Tailwind CSS. The portfolio includes sections for projects, blog posts, and contact information."
        }
      ]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {projectCategories.map((category, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={category.eventKey}>{category.title}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {projectCategories.map((category, index) => (
                        <Tab.Pane eventKey={category.eventKey} key={index}>
                          <Row className="align-items-center">
                            <Col md={6} className="text-left">
                              <div className="project-details">
                                <h3 className='text-center'>{category.projects[0].title}</h3>
                                <p className="text-left">{category.projects[0].fullDescription}</p>
                              </div>
                            </Col>
                            <Col md={6}>
                              <img 
                                src={category.projects[0].imgUrl} 
                                alt={category.projects[0].title} 
                                className="img-fluid" 
                                style={{ width: '80%', height: 'auto' }} // Reduce image size by 20%
                              />
                            </Col>
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
}
