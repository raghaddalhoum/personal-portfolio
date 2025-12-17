import { Col, Container, Row, Tab , Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import 'animate.css';


export const Projectss = () =>{
    
    const projects = [
         {
      title: "Homiq - Real Estate",
      description: "UI UX Design",
      imgUrl: projImg1,
    },
    {
      title:"FinTrack - Money Management" ,
      description: "UI UX Design",
      imgUrl: projImg2,
    },
    {
      title: "Techno - Marketing Agency",
      description: "UI UX Design",
      imgUrl: projImg3,
    },
    ]

    return(

        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                  
              <div className={"animate__animated animate__fadeIn"}>
                    <h2>Projects</h2>
                    <p>These projects are part of my hands-on training, helping me improve my design and development skills while exploring practical applications.</p>
                     <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">UI UX Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Fullstack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Flutter</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>
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
                      <p>Coming Soon!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming Soon!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
           
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}