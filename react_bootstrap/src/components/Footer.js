import React from 'react'
import {Nav,Navbar,NavDropdown,Container,Button} from 'react-bootstrap'
import './Footer.css'
function Footer(){
    return(
        <div className="Footer">
            <footer className='footer mt-auto py-3 bg-dark text-white'>
            <div className="container">© 2020 Compec. Bütün hakları saklıdır.</div>
            </footer>
        </div>
    );
}

export default Footer;