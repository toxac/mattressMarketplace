import React from 'react';
import { Nav, Navbar} from 'react-bootstrap'

const NavBar = (props)=>{
    return(
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Mattress Explorer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/custom">Custom Filters</Nav.Link>
              <Nav.Link href="/personas">Use Personas</Nav.Link>
              
            </Nav>
            <Nav className="mr-sm-2">
              <Nav.Link href="https://www.z-dd.com" className="mr-sm-2"> Zeitgeist Design and Development</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;