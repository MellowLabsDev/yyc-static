import React from 'react';
import{ Navbar, Container, Nav, Image } from 'react-bootstrap';
import { FaTwitter, FaDiscord } from 'react-icons/fa';


function NavComponent() {
      return (
        <>
        <Navbar className='fixed-top' expand="lg" style={{justifyContent:"center", zIndex:"10"}}>
          <Container className='mx-lg-5 gasc-nav-container'>
            <Navbar.Brand href="/">
            <img
              alt=""
              src="/images/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
              Yeti Yacht Club</Navbar.Brand>           
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/roadmap">Roadmap</Nav.Link>
                <Nav.Link href="/story">Story</Nav.Link>
                <Nav.Link href="/holderBenefits">Holder Benefits</Nav.Link>
                <Nav.Link href="/team">Team</Nav.Link>
                {/* <Nav.Link href="/faqs" passHref>FAQs</Nav.Link> */}
                <Nav.Link className="navSocial" href="https://twitter.com/OfficialYetiYC"><FaTwitter/></Nav.Link>
                <Nav.Link className="navSocial" href="https://discord.gg/yAVGGzWNSM"><FaDiscord/></Nav.Link>                
                <Nav.Link className="navSocial" href="https://opensea.io/collection/"><Image src='/images/opensea.png' alt="" width="18px" height="18px" /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
      );
    }
export default NavComponent;