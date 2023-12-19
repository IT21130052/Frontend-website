import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from './image1.png';
import image2 from './image2.png';
import bg from './bg.png';
import './Body.css';
import { Container, Row, Col} from 'react-bootstrap';

function Body() {
  return (
    <>
     <Container fluid>
      <Row>
        <Col md={6} className="bg-image">
          <img src={bg} alt="" style={{ width: '100%', height: '100%' }} />
        </Col>
        <Col md={6} className="overlay-card">
          <div className="card-body">
            <h1 className="card-title" style={{ padding: '4%', textAlign: 'left', fontWeight: 'bold', fontFamily: 'Sans-serif' }}>
              We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
            </h1>
            <Button className="ms-4" variant="primary" style={{ backgroundColor: '#F28D35', fontWeight: 'bold', borderColor: '#B8860B', fontFamily: 'Sans-serif', fontSize: '0.8rem', padding: '2%' }}>
              GET FREE CONSULTATION
            </Button>
          </div>
        </Col>
      </Row>
    </Container>

      <br /><br /><br /><br />

      <Container className="d-flex justify-content-center">
        <Card className="border-0" style={{ width: '55rem' }}>
          <Row className="g-0">
            <Col md={4}>
              <img className="img-fluid " src={image2} alt="" style={{ height: '100%', objectFit: 'cover' }} />
            </Col>
            <Col md={8}>
              <div className="card-body">
                <h4 className="card-title" style={{ fontSize: '2rem',color: '#6B3CC9',fontWeight: 'bold' , fontFamily: 'Sans-serif'}}>Web & Mobile App Development</h4><br/>
                <p className="card-text" style={{ fontSize: '1rem', fontFamily: 'Sans-serif' }}>
                Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.                </p>
                <Button style={{ backgroundColor: '#F28D35', borderColor: '#B8860B',fontSize: '0.8rem', fontFamily: 'Sans-serif',fontWeight: 'bold' }}>LEARN MORE</Button>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>

      <br /><br /><br />

      <Container className="d-flex justify-content-center">
        <Card className="border-0" style={{ width: '60rem' }}>
          <Row className="g-0">
            <Col md={4} className="order-md-2">
                <img className="img-fluid" src={image1} alt="" style={{ height: '100%', objectFit: 'cover' }} />
            </Col>
            <Col md={8} className="order-md-1">
                <div className="card-body">
                  <h3 className="card-title" style={{ fontSize: '2rem', color: '#6B3CC9', fontWeight: 'bold', fontFamily: 'Sans-serif' }}>Digital Strategy Consulting</h3><br />
                  <p className="card-text" style={{ fontSize: '1rem', fontFamily: 'Sans-serif' }}>
                    Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation, and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
                  </p>
                  <Button style={{ backgroundColor: '#F28D35', borderColor: '#B8860B', fontSize: '0.8rem', fontFamily: 'Sans-serif', fontWeight: 'bold' }}>LEARN MORE</Button>
                </div>
            </Col>
          </Row>
        </Card>
      </Container>
      <br /><br />
    </>
  ); 
}

export default Body;
