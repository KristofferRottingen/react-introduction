import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


function Home() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Form inline>
                    <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
            </Navbar>

            <Jumbotron>
                <h1>
                    Page title
                </h1>
            </Jumbotron>

            <h2>Lorem kore mekr</h2>

            <p>
                manakk ms mskd, dmksmdk kd kd md derer. manakk ms mskd, dmksmdk kd kd md derer. manakk ms mskd, dmksmdk kd kd md derer.manakk ms mskd, dmksmdk kd kd md derer.
            </p>

            <h3>
                Tell us somethingg
            </h3>

            <Container>
                <Row>
                    <Col md={6}>
                        <Form>
                            <Form.Group >
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Control as="textarea" rows="6" placeholder="Message" />

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <Accordion defaultActiveKey="0" className="d-md-none">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle eventKey="0">Lorem</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle eventKey="1">Ipsom</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle eventKey="2">Dolor</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <div className="d-none d-md-block">
                            <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
                                <Tab eventKey="one" title="Lorem">
                                    hey 1
                                </Tab>
                                <Tab eventKey="two" title="Ipsum">
                                    hey 2
                                </Tab>
                                <Tab eventKey="three" title="Doler">
                                    hey 3
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Home;
