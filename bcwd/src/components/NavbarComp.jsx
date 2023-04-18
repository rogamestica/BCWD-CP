import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


import Home from './Home';
import News from './News';
import Serviceadvisories from './Serviceadvisories';
import Waterqr from './Waterqr'; 
import DonorUpdates from './DonorUpdates';
import BillsPP from './BillsPP'; 
import BillsCalulator from './BillsCalulator';
import About from './About';
import Bidding from './Bidding';
import Transparency from './Transparency';
import Contact from './Contact';
import FAQs from './FAQs';

import Signin from './Signin';
import MyWaterBill from './MyWaterBill';


function NavScrollExample() {
  const [showSignIn, setShowSignIn] = React.useState(false);
  const handleSignInClick = () => {
    setShowSignIn(true);
  };
  return (
      <Router>
    <div>
    <Navbar bg="light" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto"
            style={{ maxHeight: '500px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
            <NavDropdown title="News & Advisories " id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to={"/News"}> BCWD News</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Serviceadvisories"}>Service Advisories</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Waterqr"}>Water Quality Result</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/DonorUpdates"}>Donor Updates</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5"></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Bills Payment Partners " id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to={"/BillsPP"}> Bills Payment Partners</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/BillsCalulator"}>Bill Calculator</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5"></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Company " id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to={"/About"}> About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Bidding"}>Bidding</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Transparency"}>Transparency</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5"></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Contact Us" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to={"/Contact"}>Contact Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/FAQs"}>FAQs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5"></NavDropdown.Item>
            </NavDropdown>

            <Button onClick={handleSignInClick}>
            <NavDropdown title="My Water Bill" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/Signin">Sign In </NavDropdown.Item>
            </NavDropdown>
            </Button>


            {/* <Button variant="primary" className="ms-auto">My Water Bill</Button> */}
            
           
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>  
        <Route path="/Home" element={<Home />} />   
        <Route path="/News" element={<News />} />   
        <Route path="/serviceadvisories" element={<Serviceadvisories />} />
        <Route path="/Waterqr" element={<Waterqr />} />
        <Route path="/DonorUpdates" element={<DonorUpdates />} />
        
        <Route path="/BillsPP" element={<BillsPP />} />
        <Route path="/BillsCalulator" element={<BillsCalulator />} />

        <Route path="/About" element={<About />} />
        <Route path="/Bidding" element={<Bidding />} />
        <Route path="/Transparency" element={<Transparency />} />

        <Route path="/Contact" element={<Contact />} />
        <Route path="/FAQs" element={<FAQs />} />

        {/* <Route path="/SignIn" element={<Signin />} /> */}
        <Route path="/Signin" element={showSignIn ? <Signin /> : <MyWaterBill />} />

      </Routes>
    </div>
    </Router>
  );
}

export default NavScrollExample;