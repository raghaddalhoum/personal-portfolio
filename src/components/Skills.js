import { Container, Row , Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import cPlus from "../assets/img/c++.svg";
import css from "../assets/img/css.svg";
import figma from "../assets/img/figma.svg";
import flutter from "../assets/img/flutter.svg";
import html from "../assets/img/html.svg";
import java from "../assets/img/java.svg";
import photoshop from "../assets/img/photoshop.svg";
import react from "../assets/img/react.svg";
import colorSharp from "../assets/img/color-sharp.png";
import leftArrow from "../assets/img/arrow1.svg";
import rightArrow from "../assets/img/arrow2.svg";
import { useRef } from "react";



export const Skills = () => {
      const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return(
    <section className="skills" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-box">
                    <h2>Skills</h2>
                    <p>Skills are constantly evolving as I learn and explore new technologies.<br></br> 
                    I am always improving and adapting to grow my abilities.</p>
                    <Carousel responsive={responsive}
                          infinite={true} 
                          className="skills-slider" 
                           autoPlay={true} autoPlaySpeed={3000}
                          keyBoardControl={true}
                          showDots={false}
                          containerClass="carousel-container"
                          removeArrowOnDeviceType={["tablet", "mobile"]}>
                        <div className="item">
                            <img src={figma} alt="image"/>
                        </div>

                        <div className="item">
                            <img src={html} alt="image"/>
                        </div>

                        <div className="item">
                            <img src={css} alt="image"/>
                        </div>

                        <div className="item">
                            <img src={java} alt="image"/>
                        </div>

                        <div className="item">
                            <img src={flutter} alt="image"/>
                        </div>

                        <div className="item">
                            <img src={cPlus} alt="image"/>
                        </div>

                        <div className="item">
                            <img src={photoshop} alt="image"/>
                        </div>

                        <div className="item">
                            <img src={react} alt="image"/>
                        </div>

                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp}/>
    </section>
  )

} 