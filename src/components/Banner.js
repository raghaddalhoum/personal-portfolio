import { useState , useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons" 
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Banner= () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting , setIsDeleting] = useState(false);
    const[text, setText] = useState('');
    const [delta , setDelta] = useState(300 - Math.random()*100); 
    const period = 2000;
    const toRotate= ["Web Developer" , "UI/UX Designer" , "Software Engineer"];


    useEffect(() => {
        let ticker= setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval (ticker)};
    }, [text])

    const tick =() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length - 1): fullText.substring(0,text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center"> 
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{'Hi! I`m Raghad.'}<span className="wrap"> {text}</span></h1> 
                    <p>Passionate about creating seamless digital experiences through both design and development. Skilled in UI/UX design with Figma and Adobe tools, as well as software development using Java, Flutter, and backend technologies. Committed to building intuitive, responsive, and user-centered applications while writing clean, maintainable code.</p>
                    <button onClick={() => window.open('https://drive.google.com/file/d/1-meYOn3BtGq8KbbtscnX0naYgpu8LuLQ/view?usp=drive_link', '_blank')}>Download My CV<ArrowRightCircle size={25}/> </button>
                    </div>}
                    </TrackVisibility>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
           
          </Col>
                </Row>
            </Container>
        </section>
    )
}