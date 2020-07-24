import React from 'react';
import {Accordion,Card,Container, NavLink} from 'react-bootstrap';

function Altkurullar(){
    return(
        <Container>
            <h1 class="text-center text-lg-left mt-4 mb-0">Alt Kurullarımız</h1>
            <hr class="mb-5"/>
            <h5>
                Boğaziçi Üniversitesi Bilişim Kulübü, haftalık toplantılarla bir araya gelen, her biri farklı alanlarda çalışan 7 alt kurulu bünyesinde barındırır:
            </h5>
            <Accordion className="altkurullar_accordion" defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={NavLink} variant="link" eventKey="0">
                            Boğaziçi Bilişim Ödülleri
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <h1>Hello! I'm the body</h1><h1>Hello! I'm the body</h1><h1>Hello! I'm the body</h1><h1>Hello! I'm the body</h1>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={NavLink} variant="link" eventKey="1">
                            DevTeam
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={NavLink} variant="link" eventKey="2">
                            Dijital Girişimcilik
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={NavLink} variant="link" eventKey="3">
                            Oyun Geliştirme
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={NavLink} variant="link" eventKey="4">
                            PR
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={NavLink} variant="link" eventKey="5">
                            Teknoloji
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={NavLink} variant="link" eventKey="6">
                            Veri Bilimi
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
        </Container>
    );
}

export default Altkurullar;