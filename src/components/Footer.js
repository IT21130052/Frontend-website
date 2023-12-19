import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from ".//Logo.png";

const Footer = () => {
  return (
    <footer className="bg-custom-purple text-white py-5">
      <Container>
        <Row>
          <Col lg={7} md={12}>
            <div className="mb-4" style={{textAlign: 'left', fontFamily: 'Sans-serif'}}>
              <img src={Logo} alt="Logo" style={{width: '238.99px', height: '36.11px' }} />
            </div>
            <p style={{textAlign: 'left', fontFamily: 'Sans-serif',fontSize: '0.9rem'}}>
              Your goal is our target. Not anything in between. We use <br/>online marketing platforms and tools to achieve a single <br/>objective - your business results.
            </p>
          </Col>

          <Col lg={2} md={6}>
            <div className="mb-4" style={{textAlign: 'left', fontFamily: 'Sans-serif'}}>
              <h5 className="mb-3" style={{fontWeight: 'bold',fontSize: '1.3rem'}}>Our Technology</h5>
              <ul className="list-unstyled" style={{fontSize: '0.9rem'}}>
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
                <li>GraphQL</li>
                <li>Laravel</li>
              </ul>
            </div>
          </Col>
         
          <Col lg={2} md={6}>
            <div className="mb-4" style={{textAlign: 'left', fontFamily: 'Sans-serif'}}>
              <h5 className="mb-3" style={{fontWeight: 'bold',fontSize: '1.3rem'}} >Our Services</h5>
              <ul className="list-unstyled" style={{fontSize: '0.9rem'}}>
                <li>Social Media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
                <li>Google Marketing Solutions</li>
                <li>Search Engine Optimization</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
