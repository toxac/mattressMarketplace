import React from 'react';
import { Jumbotron, Container, Col, Row, Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function HomePage (props) {
    return(
        <>
            <div className="body-content">
                <JumboHeader />
                <FeatureCards />
            </div>
        </>
    )
}


const FeatureCards = () =>{
    return(
        <Container>
            <Row>
                <Col>
                    <Card bg="info" text="white">
                        <Card.Header>Custom Filters </Card.Header>
                        <Card.Img variant="top" src="images/customize.jpg" />
                        <Card.Body>
                            <Card.Title> Use Custom Parameters </Card.Title>
                            <Card.Text>
                                Set custom parameter to discover the products in the marketplace. You can discover by prices, warranty, material, emi options, thickness and others
                            </Card.Text>
                        </Card.Body>

                        <Card.Footer>
                            <Button variant="secondary"> <Link style={{textDecoration: 'none', color:'white'}} to="/custom">Explore</Link></Button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card bg="info" text="white">
                        <Card.Header>Predefined Personas </Card.Header>
                        <Card.Img variant="top" src="images/personas.jpg" />
                        <Card.Body>
                            <Card.Title>Explore Predefined Personas </Card.Title>
                            <Card.Text>
                                Set custom parameter to discover the products in the marketplace. You can discover by prices, warranty, material, emi options, thickness and others
                            </Card.Text>
                        </Card.Body>

                        <Card.Footer>
                            <Button variant="secondary"> <Link style={{textDecoration: 'none', color:'white'}} to="/personas">Explore</Link></Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}



const JumboHeader = (props) =>{
    return(
        <>
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <h1 className="tracking-in-contract">Mattress Martketplace Intelligence</h1>
                        <p>
                            This is an app for dicovering competitive product and brands by matching them to key buyers' perceived value.
                            App comes with predefined personas for buyers in the marketplace and also provides interface to cutomized search parameters. You can select the two option below.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        </>
    )
}