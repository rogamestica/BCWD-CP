// 
import React from 'react';
import { Button } from 'react-bootstrap';
import { Carousel, Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400.png?text=Slide+1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400.png?text=Slide+2"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400.png?text=Slide+3"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          <Col>
            <h3 style={{ fontWeight: 'bold' }}>Latest News </h3>
            <p>This is the text for column 1.</p>
          </Col>
          <Col>
            <h3 >pic ni dri</h3>
            <p></p>
          </Col>
          <Col>
            <h3 style={{ fontWeight: 'bold' }}>Advisories</h3>
            <p>This is the text for column 2.</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row >
          <Col style={{ backgroundColor: '#7CB9E8', padding: '10px', width: '12rem'}}>
            <h3 style={{ fontWeight: 'bold' }}>Bill Calculator </h3>
            <p>Estimate your monthly water consumption</p>
            <Button variant="primary" as={Link} to="/BillsCalulator" >Click Here!</Button>
          </Col>
          <Col style={{ backgroundColor: '#7CB9E8', padding: '10px', marginLeft:'2rem'}}>
            <h3 style={{ fontWeight: 'bold' }}>Water Bill Information</h3>
            <p>Learn more about your billing statement</p>
            <Button variant="primary">Click Here!</Button>
          </Col>
          <Col style={{ backgroundColor: '#7CB9E8', padding: '10px', marginLeft:'2rem'}}>
            <h3 style={{ fontWeight: 'bold' }}>Apply for New Connection </h3>
            <p>Apply for a new water connection</p>
            <Button variant="primary">Click Here!</Button>
          </Col>
        </Row>
    </Container>


    <h3>Connect with us </h3>


    <Container style={{ color: 'white' }}>
      <Row style ={{backgroundColor: '#002D62'}}>
        <Col>
        <h3> Butuan City Water District 1974 </h3>
        <p> </p>
        <p> ©2013 Butuan City Water District, Inc.</p>
        <p> </p>
        <p> Jose Rosales Ave, Butuan City, Agusan Del Norte, 8600. Philippines</p>
        <p> </p>
        <p> Customer hotline: 1626 </p>
        <p>Toll-free hotline: 1800-1000-WATER</p>
        </Col>
        <Col>
        <Col >
            <h3>QUICK LINK</h3>
            <p><Link to="/serviceadvisories">Service Advisories</Link></p>
            <p><Link to="/Signin">Water Bill</Link></p>
            <p><Link to="/BillsPP">Bills Payment Partners</Link></p>
            <p><Link to="/FAQs">FAQs</Link></p>
            <p><Link to="/Contact">Contact Us </Link></p>
          </Col>
        </Col>
        <Col>
        <h3> ABOUT BCWD</h3>
        <p><Link to="/About">About</Link></p>
        <p><Link to="/Bidding">Bidding</Link></p>
        <p><Link to="/Transparency">Transparency</Link></p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Home;
