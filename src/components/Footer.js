import { Container , Row , Col} from "react-bootstrap";

import linkedin from "../assets/img/nav-icon1.svg";
import email from "../assets/img/nav-icon2.svg";
import behance from "../assets/img/nav-icon3.svg";



export const  Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                    
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/raghad-abu-dalhoum-b9099a257/"><img src={linkedin}/></a>
                        <a href="mailto:raghaddalhoum@gmail.com"><img src={email}/></a>
                        <a href="https://www.behance.net/raghadabudal1"><img src={behance}/></a>
                    </div>
                    <p>Made In 2025</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}