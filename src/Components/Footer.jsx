import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

const Footer = ()=> {

    const currentYear = new Date().getFullYear()

    return (
        <div className="footer-fixed">
        <Container>
            <Row>
                <Col>
                    Copyright { currentYear }, 
                    <a href="http://www.z-dd.com" _target="blank"> Zeitgeist Design and Development</a> 
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Footer;