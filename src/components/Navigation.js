import React from 'react'
import {Nav, Navbar, NavDropdown, Button} from 'react-bootstrap'
import './logo.svg';
import {LinkContainer} from 'react-router-bootstrap';
import {useLocation, useHistory} from 'react-router-dom';
import {UseAuth} from './Member/authcontext';

/*const RouterNavLink = ({ children, ...props }) => (
	<LinkContainer {...props}>
	  <Nav.Link active={false}>
		{children}
	  </Nav.Link>
	</LinkContainer>
)*/

function Navigation() {
	const {pathname} = useLocation();
	const {currentUser} = UseAuth();
	// eslint-disable-next-line
	const history = useHistory();
	
	return(
		<div className="Navigation">
			<Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" key={pathname} className="navigationn">
				<div className="container" style={{textAlign:"center"}}>
				<LinkContainer to="/">
					<Navbar.Brand >
						<img
							src="/logo.svg"
							width="190"
							height="50"
							alt="Compec"
							className="d-inline-block align-top"
						/>
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">

				<Nav className="mr-auto" /*variant="pills"*/></Nav>
				<Nav>
					<NavDropdown title="Biz Kimiz?" id="collasible-nav-dropdown">
						<LinkContainer to="/hakkimizda">
							<NavDropdown.Item>Hakkımızda</NavDropdown.Item>
						</LinkContainer>

						<LinkContainer to="/altkurullar">
							<NavDropdown.Item>Alt Kurullarımız</NavDropdown.Item>
						</LinkContainer>

						<LinkContainer to="/yonetim">
							<NavDropdown.Item>Yönetim Ekibimiz</NavDropdown.Item>
						</LinkContainer>
					</NavDropdown>

					<NavDropdown title="Etkinliklerimiz" id="collasible-nav-dropdown" margin={100}>
						<LinkContainer to="/bbo">
							<NavDropdown.Item>Boğaziçi Bilişim Ödülleri</NavDropdown.Item>
						</LinkContainer>

						<LinkContainer to="/techsummit">
							<NavDropdown.Item>TechSummit</NavDropdown.Item>
						</LinkContainer>

						<LinkContainer to="/datacamp">
							<NavDropdown.Item>DataCamp</NavDropdown.Item>
						</LinkContainer>

						<LinkContainer to="/gamejam">
							<NavDropdown.Item>GameJam</NavDropdown.Item>
						</LinkContainer>

						<LinkContainer to="/efounder">
							<NavDropdown.Item>e-Founder</NavDropdown.Item>
						</LinkContainer>

						<LinkContainer to="/teknodolu">
							<NavDropdown.Item>TeknoDolu</NavDropdown.Item>
						</LinkContainer>

					</NavDropdown>

					<LinkContainer to="/galeri">
						<Nav.Link>Galeri</Nav.Link>
					</LinkContainer>
					
					<LinkContainer to="/blog">
						<Nav.Link>Blog</Nav.Link>
					</LinkContainer>
					
					<LinkContainer to="/iletisim">
						<Nav.Link>İletişim</Nav.Link>
					</LinkContainer>
					{currentUser ?
						// <LinkContainer to="/member/home">
						<LinkContainer to="/member/profile">
							<Button variant="outline-primary">Üye Sistemi</Button>
						</LinkContainer>
					:
					<LinkContainer to="/member/login">
						<Button variant="outline-primary">Kayıt / Giriş</Button>
					</LinkContainer>}
				</Nav>
				</Navbar.Collapse>
				</div>
			</Navbar>
		</div>
	);
}

export default Navigation;