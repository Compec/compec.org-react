import React from 'react'
import {Nav,Navbar,NavDropdown,Container,Button} from 'react-bootstrap'
import './logo.svg';

function Navigation() {
    return(
        <div className="Navigation">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
                <Navbar.Brand href="#home">
                    <img
                        src="/logo.svg"
                        width="190"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="mr-auto" /*variant="pills"*/></Nav>
                <Nav>
                    <NavDropdown title="Biz Kimiz?" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1" >Hakkımızda</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Alt Kurullarımız</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Ekibimiz</NavDropdown.Item>
                    </NavDropdown>                    
                    
                    <NavDropdown title="Etkinliklerimiz" id="collasible-nav-dropdown" margin={100}>
                        <NavDropdown.Item href="#action/3.1">Boğaziçi Bilişim Ödülleri</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">TechSummit</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">DataCamp</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">PlayIT</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">E-Founder</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">TeknoDolu</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Akıllı Şehirler Zirvesi</NavDropdown.Item>
                    </NavDropdown> 
					                    
                    <Nav.Link href="#deets">Galeri</Nav.Link>

                    <Nav.Link href="#deets">Blog</Nav.Link>

                    <Nav.Link href="#deets">İletişim</Nav.Link>

                    <Button href="#deets" variant="outline-secondary">Giriş Yap</Button>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    );
}

export default Navigation;