import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/aiml.JPG";
import projImg2 from "../assets/img/quiz.webp";
import projImg3 from "../assets/img/port.JPG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./Skills.css";


export const Projects = () => {
  const projectCategories = [
    {
      eventKey: "first",
      title: "AI/ML",
      projects: [
        {
          title: "Impact of pollutants & forecasting temperature",
          description: "Developed an AI model to predict temperature changes.",
          imgUrl: projImg1,
          fullDescription: "The project focused on developing a temperature forecasting model using the SARIMA (Seasonal AutoRegressive Integrated Moving Average) approach. The process involved collecting and preprocessing historical weather data, followed by the application of the SARIMA model to capture both seasonal patterns and trends in the temperature data. The model was fine-tuned to enhance predictive accuracy, resulting in reliable temperature forecasts. Key outcomes included the successful identification of temperature trends and the visualization of forecasted results, showcasing the model's effectiveness in handling time series data.",
          url: "https://drive.google.com/file/d/18D9vH3jBDNwm8t1633xEKkqxSMsiQeld/view?usp=sharing"
        }
      ]
    },
    {
      eventKey: "second",
      title: "Quizter",
      projects: [
        {
          title: "Quiz Application",
          description: "Interactive quiz app for students.",
          imgUrl: projImg2,
          fullDescription: "The quiz app project was developed using Flutter for the front-end and Django with GraphQL for the back-end. The app features a responsive and interactive user interface, enabling users to take quizzes across various subjects with real-time feedback. Flutter ensured a smooth, cross-platform experience, while Django and GraphQL powered efficient data management and querying. The back-end handled user authentication, question storage, and scoring, ensuring secure and scalable operations. This project demonstrates proficiency in full-stack development, combining modern frameworks to deliver a robust and user-friendly application.",
          url: "https://github.com/Surya-teja-18315/Quizter"
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
          fullDescription: "This portfolio project is being developed using ReactJS for the front-end, Tailwind CSS for styling, and Django for the back-end. The focus is on creating an attractive and user-friendly UI that effectively showcases personal achievements, projects, and skills. ReactJS provides a dynamic and responsive interface, while Tailwind CSS ensures a modern and visually appealing design. Django is utilized for managing content and handling backend operations, including data storage and retrieval. The portfolio highlights a strong command of full-stack development and an ability to create polished, professional web applications.",
          url: "#"
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
                <div>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {projectCategories.map((category, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={category.eventKey}>{category.title}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content id="slideInUp" >
                      {projectCategories.map((category, index) => (
                        <Tab.Pane eventKey={category.eventKey} key={index}>
                          <Row className="">
                            <Col md={6} className="text-left">
                              <div className="project-details">
                                <h3 className='text-center'>{category.projects[0].title}</h3>
                                <p className="fullDescription">{category.projects[0].fullDescription}</p>
                              </div>
                            </Col>
                            <Col md={6}>
                              <a href={category.projects[0].url} target="_blank" rel="noopener noreferrer">
                              <img
                                src={category.projects[0].imgUrl}
                                alt={category.projects[0].title}
                                className="img-fluid"
                                style={{ width: '80%', height: 'auto',borderRadius: '10px'}} // Reduce image size by 20%
                              />
                              </a>
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
