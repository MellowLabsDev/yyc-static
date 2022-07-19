import React from 'react';
import{ Navbar, Container, Nav, Image } from 'react-bootstrap';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import Offcanvas from 'react-bootstrap/Offcanvas';


function NavComponent() {
      return (
        <>

        
                <Navbar className='fixed-top'  expand={false} style={{justifyContent:"center", zIndex:"10"}}>
                  <Container fluid>
                  <Navbar.Brand href="/" style={{marginRight:"auto!important",marginLeft:"auto!important"}}>
                    <img
                      alt=""
                      src="/images/navLogo.png"
                      className="d-inline-block align-top"
                      style={{maxWidth:"40vw", maxHeight:"80px"}}
                    />
                    {/* {' '}
                      Yeti Yacht Club */}
                    </Navbar.Brand>  
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-false`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                      placement="end"
                      style={{backgroundColor:"rgb(44 29 94 / 62%)"}}
                    >
                      <Offcanvas.Header closeButton>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                          <Nav.Link href="/">Home</Nav.Link>
                          <Nav.Link href="/roadmap">Roadmap</Nav.Link>
                          <Nav.Link href="/story">Story</Nav.Link>
                          <Nav.Link href="/holderBenefits">Holder Benefits</Nav.Link>
                          <Nav.Link href="/team">Team</Nav.Link>
                          {/* <Nav.Link href="/faqs" passHref>FAQs</Nav.Link> */}
                          <div className='row'>
                            <Nav.Link className="navSocial" href="https://twitter.com/OfficialYetiYC"><FaTwitter/></Nav.Link>
                            <Nav.Link className="navSocial" href="https://discord.gg/yAVGGzWNSM"><FaDiscord/></Nav.Link>                
                            <Nav.Link className="navSocial" href="https://opensea.io/collection/"><Image src='/images/opensea.png' alt="" width="18px" height="18px" /></Nav.Link>
                          </div>
                        </Nav>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Container>
                </Navbar>
              
        {/* <Navbar className='fixed-top' expand="false" style={{justifyContent:"center", zIndex:"10", position:"absolute!important"}}>
          <Container className='mx-lg-5 gasc-nav-container'>
            <Navbar.Brand href="/" style={{margin:"auto!important"}}>
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
                <Nav.Link className="navSocial" href="https://twitter.com/OfficialYetiYC"><FaTwitter/></Nav.Link>
                <Nav.Link className="navSocial" href="https://discord.gg/yAVGGzWNSM"><FaDiscord/></Nav.Link>                
                <Nav.Link className="navSocial" href="https://opensea.io/collection/"><Image src='/images/opensea.png' alt="" width="18px" height="18px" /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
        </>
      );
    }
export default NavComponent;