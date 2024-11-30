import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/portfolio-11.jpg";
import projImg2 from "../assets/img/portfolio-2 (1).jpg";
import projImg3 from "../assets/img/projectt.png";
import certImg1 from "../assets/img/DataAnCert (1).jpg";
import certImg2 from "../assets/img/Cert1c (1).jpg";
import certImg3 from "../assets/img/IS.jpg";
import certImg4 from "../assets/img/QA.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Mobile Application",
      description: "This app is designed for students seeking a liftclub",
      imgUrl: projImg1,
    },
    {
      title: "Mobile Application",
      description: "This is a car wash application for both employees and customers to keep track of their vehicles in a carwash",
      imgUrl: projImg2,
    },
    {
      title: "Mobile Application",
      description: "The LifeLine Triage app assists first responders in quickly assessing and categorizing patients using the SIEVE system, ensuring efficient emergency care. It's a user-friendly tool designed to improve response times in critical situations.",
      imgUrl: projImg3,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  const certificates = [
    {
      title: "Data Analysis with Python Certificate",
      description: "This certificate demonstrates proficiency in using Python for data analysis, covering libraries such as Pandas, NumPy, and Matplotlib. It showcases skills in data manipulation, visualization, and statistical analysis to draw meaningful insights.",
      imgUrl: certImg1,
    },
    {
      title: "Responsive Web Design Certificate",
      description: "This certificate validates expertise in building responsive websites using HTML, CSS, and Flexbox. It demonstrates the ability to create web pages that adapt seamlessly to different devices and screen sizes for an optimal user experience.",
      imgUrl: certImg2,
    },
    {
      title: "Information Security Certificate",
      description: "This certificate helped me to develope practical cybersecurity skills, such as vulnerability assessment, penetration testing, and incident response.",
      imgUrl: certImg3,
    },
    {
      title: "Quality Assurance Certificate",
      description: "This certificate helped me to develope practical skills in testing, defect tracking, and quality improvement processes.",
      imgUrl: certImg4,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounce": ""}>
                <h2>Projects</h2>
                <p>I take pride in my work and strive to achieve the best outcome possible, i never fail to meet a deadline and everything is done to the best of my ability.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Certificates</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__bounce" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>More projects coming soon...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          certificates.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
