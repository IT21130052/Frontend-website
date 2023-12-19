import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Logo from './/Logo.png';


 const Header = () =>{
    return(
        <header>
            <Navbar variant="dark" expand="lg" className="bg-custom-purple" collapseOnSelect >
             <Container>
             <div className="d-flex justify-content-center">
                    <img src={Logo} alt="Logo" style={{width: '238.99px', height: '36.11px'}}/>
                </div>
               
                <Nav className="ml-auto">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                    <Nav.Link href="#services"  className="nav-link-custom">SERVICES</Nav.Link>
                    <Nav.Link href="#aboutus" className="nav-link-custom">ABOUT US</Nav.Link>
                    <Nav.Link href="#contactus" className="nav-link-custom">CONTACT US</Nav.Link>
                    <Nav.Link href="#careers" className="nav-link-custom">CAREERS</Nav.Link>
                    </Navbar.Collapse>
                </Nav>
             </Container>
            </Navbar>
        </header>
    )
 }  

export default Header;










